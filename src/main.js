
import './style.css';
import { PRESETS } from './themes.js';
import { translations } from './i18n.js';
import { generateCSS } from './generator.js';
import { createSimulator, updateSimulator, setSpeaking, toggleMetadata } from './preview.js';

let state = {
  users: [
    { id: '12345678901', displayName: '', avatarUrl: '', color: '#ff4b4b', priority: 0 },
    { id: '12345678902', displayName: '', avatarUrl: '', color: '#4b4bff', priority: 1 }
  ],
  baseFontSize: 14,
  avatarSize: 100,
  gap: 0,
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-start',
  themeId: 'circle',
  language: 'ja',
  onlyRegistered: false,
  hideNames: false,
  defaultColor: '#ffffff', // Added default color
  unsetUserCount: 3, // Unset user count
  displayedUsers: [], // For speaking simulation
  padding: 20, // Container padding
  borderRadius: 0, // Container border radius
  backgroundColor: 'rgba(0, 0, 0, 0)', // Container background
  nameBackgroundColor: 'rgba(30, 33, 36, 0.95)', // Name background
  shadowEnabled: true, // Enable/disable shadow effect
  themeAnimations: {}, // Theme-specific speaking animations
  filePrefix: new Date().toISOString().slice(0, 10).replace(/-/g, ''), // File prefix
  isOverlayMode: new URLSearchParams(window.location.search).get('mode') === 'overlay'
};

if (state.isOverlayMode) {
  document.body.classList.add('overlay-active');
}

const userListEl = document.getElementById('user-list');
const themeSelectorEl = document.getElementById('theme-selector');
const simulatorEl = document.getElementById('discord-simulator');
let currentSpeakingUserId = null;

function init() {
  initializeUI();
  setupEventListeners();
  applyStyles();
  startSpeakingSimulation();
}

function initializeUI() {
  updateLanguageUI();
  updateButtonTitles();
  renderPresetSelector();
  applyDefaultPreset();
  renderPresetAnimationSettings();
  renderUserInputs();
  createSimulator(simulatorEl);
  updateUIFromState();
  // Update unset button text
  const btn = document.getElementById('toggle-unset-users');
  btn.textContent = `Unset Users (${state.unsetUserCount})`;
}

function applyDefaultPreset() {
  const preset = PRESETS.find(p => p.id === state.themeId);
  if (preset) {
    const { unsetUserCount, ...presetParams } = preset.preset;
    Object.assign(state, presetParams);
    updateUIFromState();
    renderPresetAnimationSettings();
    applyStyles();
  }
}

function setupEventListeners() {
  setupUserManagementListeners();
  setupToggleGroupListeners();
  setupInputSyncListeners();
  setupLanguageSwitcher();
  setupPaneNavigation();
  setupActionButtons();
}

function startSpeakingSimulation() {
  function runSpeakingLoop() {
    if (currentSpeakingUserId) {
      setSpeaking(currentSpeakingUserId, false);
      currentSpeakingUserId = null;
    }

    // Get users that are actually present in the main preview and not hidden
    const speakingUsers = Array.from(document.querySelectorAll('#simulator-list [data-userid]')).map(el => {
      const userId = el.dataset.userid;
      const user = state.displayedUsers.find(u => u.id === userId);
      return user && !user.isHidden ? user : null;
    }).filter(Boolean);

    if (speakingUsers.length > 0) {
      const randomUser = speakingUsers[Math.floor(Math.random() * speakingUsers.length)];
      currentSpeakingUserId = randomUser.id;
      setSpeaking(randomUser.id, true);

      const duration = 1800 + Math.random() * 1200;

      setTimeout(() => {
        setSpeaking(currentSpeakingUserId, false);
        currentSpeakingUserId = null;
        const pause = 400 + Math.random() * 1000;
        setTimeout(runSpeakingLoop, pause);
      }, duration);
    } else {
      setTimeout(runSpeakingLoop, 1000);
    }
  }
  runSpeakingLoop();
}

function setupUserManagementListeners() {
  document.getElementById('add-user').addEventListener('click', () => {
    state.users.push({
      id: Date.now().toString(),
      displayName: '',
      avatarUrl: '', // Initialized
      color: '#ffffff',
      priority: state.users.length
    });
    renderUserInputs();
    applyStyles();
  });

  // Handle Avatar Image Upload
  const avatarUploadBase = document.getElementById('avatar-upload-base');
  let activeUploadingUserIndex = null;

  userListEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-upload');
    if (btn) {
      activeUploadingUserIndex = Number(btn.dataset.index);
      avatarUploadBase.click();
    }
  });

  avatarUploadBase.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && Number.isInteger(activeUploadingUserIndex)) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target.result;
        if (state.users[activeUploadingUserIndex]) {
          state.users[activeUploadingUserIndex].avatarUrl = base64Data;
          renderUserInputs();
          applyStyles();
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = ''; // Reset for same-file selection
  });
}

function setupToggleGroup(groupId, stateKey) {
  const group = document.getElementById(groupId);
  if (!group) return;

  group.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const value = e.target.dataset.value;
      if (stateKey === 'shadowEnabled') {
        state[stateKey] = value === 'true';
      } else {
        state[stateKey] = stateKey === 'onlyRegistered' ? value === 'hide' : value;
      }
      applyStyles();
    });
  });
}

function setupToggleGroupListeners() {
  setupToggleGroup('layout-direction-group', 'direction');
  setupToggleGroup('layout-wrap-group', 'wrap');
  setupToggleGroup('layout-align-group', 'justifyContent');
  setupToggleGroup('unlisted-toggle-group', 'onlyRegistered');
  setupToggleGroup('shadow-enabled-group', 'shadowEnabled');
}

function syncDualInput(id, sliderId, stateKey) {
  const input = document.getElementById(id);
  const slider = document.getElementById(sliderId);

  const update = (val) => {
    state[stateKey] = parseInt(val) || 0;
    input.value = state[stateKey];
    slider.value = state[stateKey];
    applyStyles();
    if (stateKey === 'unsetUserCount') {
      const btn = document.getElementById('toggle-unset-users');
      btn.textContent = `Unset Users (${state.unsetUserCount})`;
    }
  };

  input.addEventListener('input', (e) => update(e.target.value));
  slider.addEventListener('input', (e) => update(e.target.value));
}

function setupInputSyncListeners() {
  syncDualInput('avatar-size', 'avatar-size-slider', 'avatarSize');
  syncDualInput('base-font-size', 'base-font-size-slider', 'baseFontSize');
  syncDualInput('container-padding', 'container-padding-slider', 'padding');
  syncDualInput('border-radius', 'border-radius-slider', 'borderRadius');
  syncDualInput('layout-gap', 'layout-gap-slider', 'gap');
  syncDualInput('unset-count', 'unset-count-slider', 'unsetUserCount');

  // Update button text
  const updateUnsetButton = () => {
    const btn = document.getElementById('toggle-unset-users');
    btn.textContent = `Unset Users (${state.unsetUserCount})`;
  };
  updateUnsetButton();

  // File prefix input
  document.getElementById('file-prefix').addEventListener('input', (e) => {
    state.filePrefix = e.target.value;
  });

  // Override update to also update button
  const originalUpdate = syncDualInput;
  // Wait, better to add after syncDualInput

  document.getElementById('background-color').addEventListener('input', (e) => {
    state.backgroundColor = e.target.value === '#000000' ? 'rgba(0, 0, 0, 0)' : e.target.value;
    applyStyles();
  });

  document.getElementById('name-background-color').addEventListener('input', (e) => {
    const hex = e.target.value;
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    state.nameBackgroundColor = `rgba(${r}, ${g}, ${b}, 0.95)`;
    applyStyles();
  });

  document.getElementById('hide-names').addEventListener('change', (e) => {
    state.hideNames = e.target.checked;
    applyStyles();
  });

  document.getElementById('default-color').addEventListener('input', (e) => {
    state.defaultColor = e.target.value;
    applyStyles();
  });
}

function getRandomColor() {
  const colors = ['#ff4b4b', '#4b4bff', '#4bff4b', '#ffb74b', '#ff4bff', '#4bffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.language = e.target.dataset.lang;

      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      updateLanguageUI();
      updateButtonTitles();
      renderPresetSelector();
      renderUserInputs();
      applyStyles();
    });
  });
}

function setupPaneNavigation() {
  document.querySelectorAll('.mode-rail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.paneTarget;
      document.querySelectorAll('.mode-rail-btn').forEach(item => {
        item.classList.toggle('active', item === btn);
      });
      document.querySelectorAll('.pane-panel').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.pane === target);
      });
    });
  });
}

function getCssFilename() {
  return state.filePrefix + '_discordpyoko.css';
}

function getJsonFilename() {
  return state.filePrefix + '_discordpyoko-setting.json';
}

function getBundleFilename() {
  return state.filePrefix + '_discordpyoko.zip';
}

function getExportState() {
  const { displayedUsers, isOverlayMode, ...exportState } = state;
  return exportState;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let crc = i;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 1) ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1);
    }
    table[i] = crc >>> 0;
  }
  return table;
})();

function getCrc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}

function createZipBlob(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  files.forEach(file => {
    const nameBytes = encoder.encode(file.name);
    const contentBytes = encoder.encode(file.content);
    const crc = getCrc32(contentBytes);

    const localHeader = new ArrayBuffer(30);
    const localView = new DataView(localHeader);
    writeUint32(localView, 0, 0x04034b50);
    writeUint16(localView, 4, 20);
    writeUint16(localView, 6, 0);
    writeUint16(localView, 8, 0);
    writeUint16(localView, 10, 0);
    writeUint16(localView, 12, 0);
    writeUint32(localView, 14, crc);
    writeUint32(localView, 18, contentBytes.length);
    writeUint32(localView, 22, contentBytes.length);
    writeUint16(localView, 26, nameBytes.length);
    writeUint16(localView, 28, 0);

    localParts.push(localHeader, nameBytes, contentBytes);

    const centralHeader = new ArrayBuffer(46);
    const centralView = new DataView(centralHeader);
    writeUint32(centralView, 0, 0x02014b50);
    writeUint16(centralView, 4, 20);
    writeUint16(centralView, 6, 20);
    writeUint16(centralView, 8, 0);
    writeUint16(centralView, 10, 0);
    writeUint16(centralView, 12, 0);
    writeUint16(centralView, 14, 0);
    writeUint32(centralView, 16, crc);
    writeUint32(centralView, 20, contentBytes.length);
    writeUint32(centralView, 24, contentBytes.length);
    writeUint16(centralView, 28, nameBytes.length);
    writeUint16(centralView, 30, 0);
    writeUint16(centralView, 32, 0);
    writeUint16(centralView, 34, 0);
    writeUint16(centralView, 36, 0);
    writeUint32(centralView, 38, 0);
    writeUint32(centralView, 42, offset);

    centralParts.push(centralHeader, nameBytes);
    offset += 30 + nameBytes.length + contentBytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.byteLength, 0);
  const endHeader = new ArrayBuffer(22);
  const endView = new DataView(endHeader);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 4, 0);
  writeUint16(endView, 6, 0);
  writeUint16(endView, 8, files.length);
  writeUint16(endView, 10, files.length);
  writeUint32(endView, 12, centralSize);
  writeUint32(endView, 16, offset);
  writeUint16(endView, 20, 0);

  return new Blob([...localParts, ...centralParts, endHeader], { type: 'application/zip' });
}

function readZipTextFiles(buffer) {
  const view = new DataView(buffer);
  const decoder = new TextDecoder();
  const files = [];
  let offset = 0;

  while (offset + 30 <= buffer.byteLength && view.getUint32(offset, true) === 0x04034b50) {
    const compressionMethod = view.getUint16(offset + 8, true);
    const compressedSize = view.getUint32(offset + 18, true);
    const filenameLength = view.getUint16(offset + 26, true);
    const extraLength = view.getUint16(offset + 28, true);
    const nameStart = offset + 30;
    const dataStart = nameStart + filenameLength + extraLength;
    const dataEnd = dataStart + compressedSize;

    if (dataEnd > buffer.byteLength) {
      break;
    }

    const name = decoder.decode(new Uint8Array(buffer, nameStart, filenameLength));
    if (compressionMethod === 0) {
      const content = decoder.decode(new Uint8Array(buffer, dataStart, compressedSize));
      files.push({ name, content });
    }

    offset = dataEnd;
  }

  return files;
}

function importConfigText(text) {
  const config = JSON.parse(text);
  state = { ...state, ...config };
  updateLanguageUI();
  updateUIFromState();
  applyStyles();
  renderPresetSelector();
  renderUserInputs();
  showNotification(translations[state.language].loadConfig + ' OK');
}

function setupActionButtons() {
  document.getElementById('toggle-debug').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    toggleMetadata();
  });

  document.getElementById('toggle-unset-users').addEventListener('click', () => {
    const panel = document.getElementById('unset-users-control');
    panel.classList.toggle('hidden');
  });

  document.getElementById('copy-css').addEventListener('click', () => {
    const css = generateCSS(state);
    navigator.clipboard.writeText(css).then(() => {
      const msg = translations[state.language].copiedAction || 'Copied!';
      showNotification(msg);
    });
  });

  document.getElementById('save-bundle').addEventListener('click', () => {
    const css = generateCSS(state);
    const settings = JSON.stringify(getExportState(), null, 2);
    const blob = createZipBlob([
      { name: getCssFilename(), content: css },
      { name: getJsonFilename(), content: settings }
    ]);
    downloadBlob(blob, getBundleFilename());
  });

  document.getElementById('import-json-btn').addEventListener('click', () => {
    document.getElementById('import-json-input').click();
  });

  document.getElementById('import-json-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        if (file.name.toLowerCase().endsWith('.zip')) {
          const files = readZipTextFiles(event.target.result);
          const settingsFile = files.find(item => item.name.toLowerCase().endsWith('.json'));
          if (!settingsFile) {
            throw new Error('settings json not found in zip');
          }
          importConfigText(settingsFile.content);
        } else {
          importConfigText(event.target.result);
        }
      } catch (err) {
        console.error('JSON parse error:', err);
        showNotification('Invalid JSON: ' + err.message);
      }
    };
    if (file.name.toLowerCase().endsWith('.zip')) {
      reader.readAsArrayBuffer(file);
    } else {
      reader.readAsText(file);
    }
    e.target.value = '';
  });
}

function showNotification(msg) {
  const div = document.createElement('div');
  div.className = 'notification';
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add('show'), 10);
  setTimeout(() => {
    div.classList.remove('show');
    setTimeout(() => div.remove(), 300);
  }, 2000);
}

function renderPresetAnimationSettings() {
  const container = document.getElementById('theme-animation-settings');
  if (!container) return;

  const preset = PRESETS.find(t => t.id === state.themeId);
  if (!preset) return;

  const currentAnimations = state.themeAnimations[state.themeId] || preset.speakingAnimations || { bounce: true, glow: false, shake: false };

  container.innerHTML = `
    <div class="input-field horizontal">
      <label>Bounce</label>
      <div class="toggle-group" id="bounce-toggle-group">
        <button type="button" class="toggle-btn ${currentAnimations.bounce ? 'active' : ''}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${!currentAnimations.bounce ? 'active' : ''}" data-value="false">OFF</button>
      </div>
    </div>
    <div class="input-field horizontal">
      <label>Glow</label>
      <div class="toggle-group" id="glow-toggle-group">
        <button type="button" class="toggle-btn ${currentAnimations.glow ? 'active' : ''}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${!currentAnimations.glow ? 'active' : ''}" data-value="false">OFF</button>
      </div>
    </div>
    <div class="input-field horizontal">
      <label>Shake</label>
      <div class="toggle-group" id="shake-toggle-group">
        <button type="button" class="toggle-btn ${currentAnimations.shake ? 'active' : ''}" data-value="true">ON</button>
        <button type="button" class="toggle-btn ${!currentAnimations.shake ? 'active' : ''}" data-value="false">OFF</button>
      </div>
    </div>
  `;

  // Add event listeners
  ['bounce', 'glow', 'shake'].forEach(animationType => {
    const group = document.getElementById(`${animationType}-toggle-group`);
    if (!group) return;
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const value = e.target.dataset.value === 'true';
        if (!state.themeAnimations[state.themeId]) {
          state.themeAnimations[state.themeId] = { ...currentAnimations };
        }
        state.themeAnimations[state.themeId][animationType] = value;
        applyStyles();
      });
    });
  });
}

function renderPresetSelector() {
  themeSelectorEl.innerHTML = ''; // Clear

  PRESETS.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = `theme-card ${state.themeId === preset.id ? 'active' : ''}`;
    btn.dataset.theme = preset.id;
    btn.type = 'button';

    const previewContainer = document.createElement('div');
    previewContainer.className = 'theme-preview-container';

    const shadow = previewContainer.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #0b0d10;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          animation: none !important;
          transition: none !important;
        }

        .thumb {
          width: 100%;
          height: 100%;
          padding: 10px;
          display: grid;
          place-items: center;
          color: #f4f4f5;
          font-family: system-ui, sans-serif;
          overflow: hidden;
        }

        .cluster {
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .stack {
          display: grid;
          gap: 6px;
          justify-items: start;
        }

        .avatar {
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          background: #5865f2;
          color: white;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          box-shadow: 0 0 0 3px #ef4444, 0 0 18px rgba(239, 68, 68, 0.58);
        }

        .avatar::before {
          content: "";
          width: 17px;
          height: 12px;
          border-radius: 999px 999px 7px 7px;
          background: currentColor;
          box-shadow: inset 5px 5px 0 -3px #5865f2, inset -5px 5px 0 -3px #5865f2;
        }

        .avatar.idle {
          background: #52525b;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.18);
          opacity: 0.72;
        }

        .avatar.idle::before {
          box-shadow: inset 5px 5px 0 -3px #52525b, inset -5px 5px 0 -3px #52525b;
        }

        .circle .avatar,
        .badge .avatar,
        .list .avatar {
          border-radius: 999px;
        }

        .square .avatar {
          width: 36px;
          height: 36px;
          border-radius: 0;
        }

        .badge .name,
        .list .name {
          min-width: 42px;
          padding: 4px 8px;
          border-radius: 5px;
          background: #dc2626;
          color: white;
          font-size: 10px;
          font-weight: 750;
          line-height: 1;
          text-align: center;
          box-shadow: 0 5px 18px rgba(220, 38, 38, 0.28);
        }

        .list .row {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .list .row + .row .name {
          background: #27272a;
          color: #d4d4d8;
          box-shadow: none;
        }

        .portrait-card {
          width: 48px;
          height: 64px;
          border: 2px solid #ef4444;
          border-radius: 8px;
          background: #18181b;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.48);
          display: grid;
          grid-template-rows: minmax(0, 1fr) 16px;
          overflow: hidden;
        }

        .portrait-card .mark {
          display: grid;
          place-items: center;
          min-height: 0;
          background: #5865f2;
        }

        .portrait-card .mark::before {
          content: "";
          width: 22px;
          height: 15px;
          border-radius: 999px 999px 8px 8px;
          background: #f4f4f5;
          box-shadow: inset 6px 6px 0 -4px #5865f2, inset -6px 6px 0 -4px #5865f2;
        }

        .portrait-card .caption {
          display: grid;
          place-items: center;
          background: rgba(0,0,0,0.62);
          font-size: 9px;
          font-weight: 750;
        }

        .standee {
          width: 46px;
          height: 68px;
          position: relative;
          filter: brightness(62%);
        }

        .standee::before {
          content: "";
          position: absolute;
          right: 7px;
          bottom: 0;
          left: 7px;
          height: 58px;
          border-radius: 999px 999px 8px 8px;
          background: linear-gradient(#5865f2 0 44%, #3f4ed8 44% 100%);
          box-shadow: 0 0 0 2px #ef4444, 0 0 18px rgba(239, 68, 68, 0.58);
        }

        .standee::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 31px;
          width: 19px;
          height: 13px;
          transform: translateX(-50%);
          border-radius: 999px 999px 7px 7px;
          background: #f4f4f5;
          box-shadow: inset 5px 5px 0 -3px #5865f2, inset -5px 5px 0 -3px #5865f2;
        }
      </style>
      ${getPresetPreviewMarkup(preset.id)}
    `;

    btn.appendChild(previewContainer);

    const label = document.createElement('span');
    label.className = 'theme-name';
    label.textContent = getPresetLabel(preset);
    btn.appendChild(label);

    btn.addEventListener('click', () => {
      state.themeId = preset.id;
      // Apply preset parameters, excluding unsetUserCount
      const { unsetUserCount, ...presetParams } = preset.preset;
      Object.assign(state, presetParams);
      updateUIFromState();
      document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      renderPresetAnimationSettings();
      applyStyles();
    });

    themeSelectorEl.appendChild(btn);
  });
}

function getPresetPreviewMarkup(presetId) {
  if (presetId === 'circle') {
    return `
      <div class="thumb circle">
        <div class="cluster">
          <div class="avatar"></div>
          <div class="avatar idle"></div>
          <div class="avatar idle"></div>
        </div>
      </div>
    `;
  }

  if (presetId === 'actor') {
    return `
      <div class="thumb portrait">
        <div class="portrait-card">
          <div class="mark"></div>
          <div class="caption">NAME</div>
        </div>
      </div>
    `;
  }

  if (presetId === 'horizontal') {
    return `
      <div class="thumb badge">
        <div class="cluster">
          <div class="avatar"></div>
          <div class="name">NAME</div>
        </div>
      </div>
    `;
  }

  if (presetId === 'vertical') {
    return `
      <div class="thumb list">
        <div class="stack">
          <div class="row">
            <div class="avatar"></div>
            <div class="name">NAME</div>
          </div>
          <div class="row">
            <div class="avatar idle"></div>
            <div class="name">NAME</div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="thumb portrait">
      <div class="standee"></div>
    </div>
  `;
}

function getPresetLabel(preset) {
  const key = `preset_${preset.id}`;
  return translations[state.language][key] || preset.name;
}

function renderUserInputs() {
  userListEl.innerHTML = '';
  const sortedUsers = [...state.users].map((user, originalIndex) => ({ ...user, originalIndex })).sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  sortedUsers.forEach((user, sortedIndex) => {
    const userId = String(user.id);
    const escapedId = escapeHtmlAttr(userId);
    const escapedDisplayName = escapeHtmlAttr(user.displayName || '');
    const escapedAvatarUrl = escapeHtmlAttr(user.avatarUrl || '');
    const avatarPreviewId = `preview-user-${user.originalIndex}`;
    const div = document.createElement('div');
    div.className = `user-item ${user.isHidden ? 'user-item-hidden' : ''}`;
    div.innerHTML = `
      <div class="user-card-side">
        <img src="${escapedAvatarUrl || 'https://cdn.discordapp.com/embed/avatars/0.png'}" class="avatar-preview" id="${avatarPreviewId}" />
        <button class="visibility-toggle ${user.isHidden ? 'hidden' : ''}" data-index="${user.originalIndex}" title="${translations[state.language].visibility}">
          <span class="material-symbols-rounded">${user.isHidden ? 'visibility_off' : 'visibility'}</span>
        </button>
      </div>

      <div class="user-card-main">
        <div class="user-card-row">
          <label>
            <span class="mini-label">${translations[state.language].userId}</span>
            <input type="text" value="${escapedId}" data-type="id" data-index="${user.originalIndex}" placeholder="${translations[state.language].userId}" title="${translations[state.language].userId}" />
          </label>
          <label>
            <span class="mini-label">${translations[state.language].displayName}</span>
            <input type="text" value="${escapedDisplayName}" data-type="displayName" data-index="${user.originalIndex}" placeholder="上書きする場合のみ入力" title="${translations[state.language].displayName}" ${user.isHidden ? 'disabled' : ''} />
          </label>
        </div>
        <label class="avatar-input-container">
          <span class="mini-label">${translations[state.language].avatarOverride}</span>
          <span class="avatar-input-row">
            <input type="text" value="${escapedAvatarUrl}" data-type="avatarUrl" data-index="${user.originalIndex}" data-preview-id="${avatarPreviewId}" class="avatar-url-input" placeholder="URL / DataURI" title="${translations[state.language].avatarOverride}" ${user.isHidden ? 'disabled' : ''} />
            <button class="btn-upload" data-index="${user.originalIndex}" title="Upload Image" ${user.isHidden ? 'disabled' : ''}>
              <span class="material-symbols-rounded" style="font-size: 16px;">upload_file</span>
            </button>
          </span>
        </label>
      </div>

      <div class="user-actions">
        <label>
          <span class="mini-label">${translations[state.language].priority}</span>
          <input type="number" value="${user.priority ?? sortedIndex}" data-type="priority" data-index="${user.originalIndex}" placeholder="0" title="${translations[state.language].priority}" ${user.isHidden ? 'disabled' : ''} />
        </label>
        <label>
          <span class="mini-label">${translations[state.language].userColor}</span>
          <input type="color" value="${user.color}" data-type="color" data-index="${user.originalIndex}" title="${translations[state.language].userColor}" ${user.isHidden ? 'disabled' : ''} />
        </label>
        <span class="remove-user" data-index="${user.originalIndex}">&times;</span>
      </div>
    `;
    userListEl.appendChild(div);
  });

  // Attach listeners to dynamic inputs
  userListEl.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
      const type = e.target.dataset.type;
      const userIndex = Number(e.target.dataset.index);
      if (!Number.isInteger(userIndex) || !state.users[userIndex]) return;
      let value = e.target.value;
      
      if (type === 'priority') {
        value = parseInt(value) || 0;
      }
      
      state.users[userIndex][type] = value;
      
      // Real-time preview update for Avatar URL
      if (type === 'avatarUrl') {
        const preview = document.getElementById(e.target.dataset.previewId);
        if (preview) preview.src = value || 'https://cdn.discordapp.com/embed/avatars/0.png';
      }
      
      // If priority changed, we might want to re-render to show new order
      if (type === 'priority') {
        renderUserInputs();
      }
      
      applyStyles();
    });
  });

  userListEl.querySelectorAll('.remove-user').forEach(span => {
    span.addEventListener('click', (e) => {
      const userIndex = Number(e.target.dataset.index);
      if (!Number.isInteger(userIndex) || !state.users[userIndex]) return;
      state.users.splice(userIndex, 1);
      renderUserInputs();
      applyStyles();
    });
  });

  userListEl.querySelectorAll('.visibility-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target.closest('.visibility-toggle');
      const userIndex = Number(target?.dataset.index);
      if (!Number.isInteger(userIndex) || !state.users[userIndex]) return;
      state.users[userIndex].isHidden = !state.users[userIndex].isHidden;
      renderUserInputs();
      applyStyles();
    });
  });
}

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function updateLanguageUI() {
  const t = translations[state.language];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      const textSpan = el.querySelector(':scope > span:not(.material-symbols-rounded)');
      if (textSpan) {
        textSpan.textContent = t[key];
        return;
      }
      el.textContent = t[key];
    }
  });

  // Special case for alert
  window.copiedMessage = t.copiedAction;
}

function updateButtonTitles() {
  const t = translations[state.language];
  document.getElementById('copy-css').title = t.copyCss;
  document.getElementById('save-bundle').title = t.saveBundle;
  document.getElementById('import-json-btn').title = t.loadConfig;
}

function updateUIFromState() {
  // Sync inputs with state values
  document.getElementById('avatar-size').value = state.avatarSize;
  document.getElementById('avatar-size-slider').value = state.avatarSize;
  document.getElementById('base-font-size').value = state.baseFontSize;
  document.getElementById('base-font-size-slider').value = state.baseFontSize;
  document.getElementById('container-padding').value = state.padding;
  document.getElementById('container-padding-slider').value = state.padding;
  document.getElementById('border-radius').value = state.borderRadius;
  document.getElementById('border-radius-slider').value = state.borderRadius;
  // Sync Layout Settings
  document.getElementById('layout-gap').value = state.gap;
  document.getElementById('layout-gap-slider').value = state.gap;
  // Sync Unset User Count
  document.getElementById('unset-count').value = state.unsetUserCount;
  document.getElementById('unset-count-slider').value = state.unsetUserCount;
  
  // Sync Toggle Groups Helper
  function syncToggleGroup(groupId, currentValue) {
    const group = document.getElementById(groupId);
    if (!group) return;
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      if (btn.dataset.value === currentValue) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }

  syncToggleGroup('layout-direction-group', state.direction);
  syncToggleGroup('layout-wrap-group', state.wrap);
  syncToggleGroup('layout-align-group', state.justifyContent);
  syncToggleGroup('shadow-enabled-group', state.shadowEnabled ? 'true' : 'false');

  document.getElementById('hide-names').checked = state.hideNames;
  
  // Sync Default Color
  const defColorInput = document.getElementById('default-color');
  if (defColorInput) defColorInput.value = state.defaultColor || '#ffffff';

  // Sync Unlisted Visibility Toggle Group
  const toggleGroup = document.getElementById('unlisted-toggle-group');
  if (toggleGroup) {
    const targetValue = state.onlyRegistered ? 'hide' : 'show';
    toggleGroup.querySelectorAll('.toggle-btn').forEach(btn => {
      if (btn.dataset.value === targetValue) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Sync Language Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.language);
  });

  // Sync File Prefix
  document.getElementById('file-prefix').value = state.filePrefix;

  // Sync Sidebar Tabs (default to settings if active tab doesn't match new state context somehow)
  // (Usually sidebar tab state isn't in JSON but we want to reset to something sensible or keep current)
}

function applyStyles() {
  // Create displayed users: unset users + all registered users (always include for DOM, CSS controls visibility)
  const sortedUsers = [...state.users].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  const displayedUsers = [...sortedUsers];
  const unsetUsers = [];
  for (let i = 0; i < state.unsetUserCount; i++) {
    unsetUsers.push({
      id: `unset_${i}`,
      name: `Unset${i+1}`,
      color: state.defaultColor,
      priority: 100 + i,
      isHidden: false
    });
  }
  displayedUsers.push(...unsetUsers);
  state.displayedUsers = displayedUsers;

  const css = generateCSS(state);
  let styleEl = document.getElementById('generated-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'generated-styles';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = css;

  // Also apply to preview simulator
  let previewStyleEl = document.getElementById('preview-styles');
  if (!previewStyleEl) {
    previewStyleEl = document.createElement('style');
    previewStyleEl.id = 'preview-styles';
    const simulator = document.getElementById('discord-simulator');
    if (simulator) {
      simulator.appendChild(previewStyleEl);
    }
  }
  if (previewStyleEl) {
    previewStyleEl.textContent = css;
  }

  const cssOutput = document.getElementById('css-output');
  if (cssOutput) {
    cssOutput.textContent = css;
  }

  // Update simulator with displayed users
  updateSimulator(displayedUsers, state);
  if (currentSpeakingUserId) {
    setSpeaking(currentSpeakingUserId, true);
  }
}

init();
