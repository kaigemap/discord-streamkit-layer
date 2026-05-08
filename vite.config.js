import { defineConfig } from 'vite'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

function serveOfflineZip() {
  return {
    name: 'serve-offline-zip',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/discord-streamkit-layer/discordpyoko-offline.zip' && url !== '/discordpyoko-offline.zip') {
          next()
          return
        }

        const zipPath = resolve('docs/discordpyoko-offline.zip')
        if (!existsSync(zipPath)) {
          res.statusCode = 404
          res.end('Run npm run build first to generate discordpyoko-offline.zip')
          return
        }

        const size = statSync(zipPath).size
        res.setHeader('Content-Type', 'application/zip')
        res.setHeader('Content-Disposition', 'attachment; filename="discordpyoko-offline.zip"')
        res.setHeader('Content-Length', size)
        createReadStream(zipPath).pipe(res)
      })
    }
  }
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/discord-streamkit-layer/',
  plugins: [serveOfflineZip()],
  build: {
    outDir: process.env.VITE_OUT_DIR || 'docs',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/index.js',
        assetFileNames: 'assets/index.[ext]'
      }
    }
  }
})
