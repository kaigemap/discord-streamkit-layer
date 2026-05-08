import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const viteBin = join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');
const docsDir = join(rootDir, 'docs');
const offlineDir = join(rootDir, '.offline-build');
const zipPath = join(docsDir, 'discordpyoko-offline.zip');

function runViteBuild(env) {
  const result = spawnSync(process.execPath, [viteBin, 'build'], {
    cwd: rootDir,
    env: { ...process.env, ...env },
    stdio: 'inherit'
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function getFiles(dir, baseDir = dir) {
  return readdirSync(dir).flatMap(entry => {
    const filePath = join(dir, entry);
    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      return getFiles(filePath, baseDir);
    }
    return [{
      name: relative(baseDir, filePath).replaceAll('\\', '/'),
      bytes: readFileSync(filePath)
    }];
  });
}

const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let crc = i;
  for (let j = 0; j < 8; j++) {
    crc = (crc & 1) ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1);
  }
  crcTable[i] = crc >>> 0;
}

function getCrc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function uint16(value) {
  const buffer = Buffer.alloc(2);
  buffer.writeUInt16LE(value);
  return buffer;
}

function uint32(value) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32LE(value >>> 0);
  return buffer;
}

function getDosDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

function createZip(files) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const { dosDate, dosTime } = getDosDateTime();

  files.forEach(file => {
    const name = Buffer.from(file.name);
    const crc = getCrc32(file.bytes);
    const flags = 0x0800;
    const method = 0;

    const localHeader = Buffer.concat([
      uint32(0x04034b50),
      uint16(20),
      uint16(flags),
      uint16(method),
      uint16(dosTime),
      uint16(dosDate),
      uint32(crc),
      uint32(file.bytes.length),
      uint32(file.bytes.length),
      uint16(name.length),
      uint16(0)
    ]);

    localParts.push(localHeader, name, file.bytes);

    centralParts.push(Buffer.concat([
      uint32(0x02014b50),
      uint16(0x0314),
      uint16(20),
      uint16(flags),
      uint16(method),
      uint16(dosTime),
      uint16(dosDate),
      uint32(crc),
      uint32(file.bytes.length),
      uint32(file.bytes.length),
      uint16(name.length),
      uint16(0),
      uint16(0),
      uint16(0),
      uint16(0),
      uint32(0x81a40000),
      uint32(offset),
      name
    ]));

    offset += localHeader.length + name.length + file.bytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const endHeader = Buffer.concat([
    uint32(0x06054b50),
    uint16(0),
    uint16(0),
    uint16(files.length),
    uint16(files.length),
    uint32(centralSize),
    uint32(offset),
    uint16(0)
  ]);

  return Buffer.concat([...localParts, ...centralParts, endHeader]);
}

function inlineOfflineAssets() {
  const htmlPath = join(offlineDir, 'index.html');
  const cssPath = join(offlineDir, 'assets', 'index.css');
  const jsPath = join(offlineDir, 'assets', 'index.js');
  const css = readFileSync(cssPath, 'utf8');
  const js = readFileSync(jsPath, 'utf8').replaceAll('</script', '<\\/script');
  const html = readFileSync(htmlPath, 'utf8')
    .replace(/<script type="module" crossorigin src="\.\/assets\/index\.js"><\/script>/, `<script type="module">\n${js}\n</script>`)
    .replace(/<link rel="stylesheet" crossorigin href="\.\/assets\/index\.css">/, `<style>\n${css}\n</style>`);

  writeFileSync(htmlPath, html);
  rmSync(join(offlineDir, 'assets'), { recursive: true, force: true });
}

if (!existsSync(viteBin)) {
  console.error('Vite is not installed. Run npm install first.');
  process.exit(1);
}

rmSync(offlineDir, { recursive: true, force: true });
runViteBuild({});
runViteBuild({
  VITE_BASE_PATH: './',
  VITE_OUT_DIR: '.offline-build'
});

inlineOfflineAssets();
mkdirSync(docsDir, { recursive: true });
writeFileSync(zipPath, createZip(getFiles(offlineDir)));
rmSync(offlineDir, { recursive: true, force: true });

console.log(`Offline bundle written to ${relative(rootDir, zipPath)}`);
