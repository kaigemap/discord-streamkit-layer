
import './style.css';
import { THEMES } from './themes.js';
import { translations } from './i18n.js';
import { generateCSS, getAnimationCSS } from './generator.js';
import { createSimulator, updateSimulator, setSpeaking, toggleMetadata } from './preview.js';

let state = {
  users: [
    { id: '12345678901', displayName: '', color: '#ff4b4b', priority: 0 },
    { id: '12345678902', displayName: '', color: '#4b4bff', priority: 1 }
  ],
  animType: 'bounce',
  baseFontSize: 14,
  avatarSize: 100,
  gap: 0,
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-start',
  themeId: 'horizontal',
  language: 'ja',
  onlyRegistered: false,
  hideNames: false,
  defaultColor: '#ffffff', // Added default color
  unsetUserCount: 3, // Unset user count
  displayedUsers: [], // For speaking simulation
  isOverlayMode: new URLSearchParams(window.location.search).get('mode') === 'overlay'
};

if (state.isOverlayMode) {
  document.body.classList.add('overlay-active');
}

const userListEl = document.getElementById('user-list');
const themeSelectorEl = document.getElementById('theme-selector');
const simulatorEl = document.getElementById('discord-simulator');

function init() {
  initializeUI();
  setupEventListeners();
  startSpeakingSimulation();
  setTimeout(() => requestAnimationFrame(() => applyStyles()), 0);
}

function initializeUI() {
  updateLanguageUI();
  updateButtonTitles();
  renderThemeSelector();
  renderUserInputs();
  createSimulator(simulatorEl);
  updateUIFromState();
  // Update unset button text
  const btn = document.getElementById('toggle-unset-users');
  btn.textContent = `Unset Users (${state.unsetUserCount})`;
}

function setupEventListeners() {
  setupUserManagementListeners();
  setupToggleGroupListeners();
  setupInputSyncListeners();
  setupLanguageSwitcher();
  setupSidebarTabs();
  setupActionButtons();
}

function startSpeakingSimulation() {
  function runSpeakingLoop() {
    // Get users that are actually present in the main preview and not hidden
    const speakingUsers = Array.from(document.querySelectorAll('#simulator-list [data-userid]')).map(el => {
      const userId = el.dataset.userid;
      const user = state.displayedUsers.find(u => u.id === userId);
      return user && !user.isHidden ? user : null;
    }).filter(Boolean);

    if (speakingUsers.length > 0) {
      const randomUser = speakingUsers[Math.floor(Math.random() * speakingUsers.length)];
      setSpeaking(randomUser.id, true);
      updateMiniPreviewsSpeaking(randomUser.id, true);

      const duration = 1200 + Math.random() * 1800;

      setTimeout(() => {
        setSpeaking(randomUser.id, false);
        updateMiniPreviewsSpeaking(randomUser.id, false);
        const pause = 400 + Math.random() * 1000;
        setTimeout(runSpeakingLoop, pause);
      }, duration);
    } else {
      setTimeout(runSpeakingLoop, 1000);
    }
  }
  runSpeakingLoop();
}

function updateMiniPreviewsSpeaking(userId, isSpeaking) {
  document.querySelectorAll('.theme-card').forEach(card => {
    const shadow = card.querySelector('.theme-preview-container')?.shadowRoot;
    if (shadow) {
      const miniUserEl = shadow.querySelector('[data-userid="mini1"]');
      const avatar = miniUserEl?.querySelector('.Voice_avatar');
      if (miniUserEl && avatar) {
        if (isSpeaking) {
          miniUserEl.classList.add('wrapper_speaking');
          avatar.classList.add('Voice_avatarSpeaking');
        } else {
          miniUserEl.classList.remove('wrapper_speaking');
          avatar.classList.remove('Voice_avatarSpeaking');
        }
      }
    }
  });
}

function setupUserManagementListeners() {
  document.getElementById('add-user').addEventListener('click', () => {
    state.users.push({
      id: Date.now().toString(),
      displayName: '',
      color: '#ffffff',
      priority: state.users.length
    });
    renderUserInputs();
    applyStyles();
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
      state[stateKey] = stateKey === 'onlyRegistered' ? value === 'hide' : value;
      applyStyles();
    });
  });
}

function setupToggleGroupListeners() {
  setupToggleGroup('anim-type-group', 'animType');
  setupToggleGroup('layout-direction-group', 'direction');
  setupToggleGroup('layout-wrap-group', 'wrap');
  setupToggleGroup('layout-align-group', 'justifyContent');
  setupToggleGroup('unlisted-toggle-group', 'onlyRegistered');
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
  syncDualInput('layout-gap', 'layout-gap-slider', 'gap');
  syncDualInput('unset-count', 'unset-count-slider', 'unsetUserCount');

  // Update button text
  const updateUnsetButton = () => {
    const btn = document.getElementById('toggle-unset-users');
    btn.textContent = `Unset Users (${state.unsetUserCount})`;
  };
  updateUnsetButton();

  // Override update to also update button
  const originalUpdate = syncDualInput;
  // Wait, better to add after syncDualInput

  document.getElementById('hide-names').addEventListener('change', (e) => {
    state.hideNames = e.target.checked;
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
      renderThemeSelector();
      renderUserInputs();
      applyStyles();
    });
  });
}

function setupSidebarTabs() {
  document.querySelectorAll('.sidebar-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.target.dataset.sidebarTab;

      document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');

      document.querySelectorAll('.sidebar-scroll').forEach(panel => {
        panel.classList.remove('active');
        panel.style.display = 'none';
      });
      const activePanel = document.getElementById(`sidebar-tab-${target}`);
      activePanel.classList.add('active');
      activePanel.style.display = 'flex';

      if (target === 'css') {
        document.getElementById('css-output').textContent = generateCSS(state);
      }
    });
  });
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

  document.getElementById('download-css').addEventListener('click', () => {
    const css = generateCSS(state);
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "overlay.css";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('export-json').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", url);
    downloadAnchorNode.setAttribute("download", "overlay-config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    URL.revokeObjectURL(url);
  });

  document.getElementById('import-json-btn').addEventListener('click', () => {
    document.getElementById('import-json-input').click();
  });

  document.getElementById('import-json-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        console.log('File loaded, parsing JSON...');
        const config = JSON.parse(event.target.result);
        console.log('Parsed config:', config);
        state = { ...state, ...config };
        console.log('State updated:', state);
        updateLanguageUI();
        updateUIFromState();
        applyStyles();
        renderThemeSelector();
        renderUserInputs();
        showNotification(translations[state.language].loadConfig + ' OK');
      } catch (err) {
        console.error('JSON parse error:', err);
        showNotification('Invalid JSON: ' + err.message);
      }
    };
    reader.readAsText(file);
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

function renderThemeSelector() {
  themeSelectorEl.innerHTML = ''; // Clear
  
  THEMES.forEach(theme => {
    const btn = document.createElement('button');
    btn.className = `theme-card ${state.themeId === theme.id ? 'active' : ''}`;
    btn.dataset.theme = theme.id;
    
    // Create preview container
    const previewContainer = document.createElement('div');
    previewContainer.className = 'theme-preview-container';
    
    // Use Shadow DOM for isolation
    const shadow = previewContainer.attachShadow({ mode: 'open' });
    
    // Basic simulator HTML
    // Basic simulator HTML with Discord class structure
    const miniUsers = [
      { id: 'mini1', color: '#ff4b4b' }
    ];

    const userHtml = miniUsers.map((u, i) => `
      <li class="Voice_voiceState voice_state" data-userid="${u.id}">
        <img class="Voice_avatar voice_avatar Voice_avatarSpeaking" src="https://cdn.discordapp.com/embed/avatars/${i % 6}.png#id=${u.id}" />
        <div class="Voice_user voice_user">
          <span class="Voice_name voice_name">User</span>
        </div>
      </li>
    `).join('');


    const [structuralStyles, perUserStyles] = theme.content.includes('/* --- User Highlight --- */') 
      ? theme.content.split('/* --- User Highlight --- */')
      : [theme.content, ''];

    shadow.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #0b0d10;
        }
        
        /* Scale container for mini-preview */
        ul[class^="Voice_voiceStates"] {
          transform: scale(${theme.previewScale || 0.4}) translateY(${theme.previewTranslateY || 0}px);
        }
        
        /* Theme Structural Styles */
        ${structuralStyles.replace(/{{avatarSize}}/g, state.avatarSize)}
        
        /* Theme User Styles (Mocked for mini1) */
        ${perUserStyles.replace(/USER_ID/g, 'mini1').replace(/var\(--user-color\)/g, '#ff4b4b').replace(/var\(--user-color-alpha\)/g, 'rgba(255, 75, 75, 0.4)').replace(/{{avatarSize}}/g, state.avatarSize)}
        
        /* Animation CSS */
        ${getAnimationCSS(state.animType)}
      </style>
      <ul class="Voice_voiceStates voice-states">
        ${userHtml}
      </ul>
    `;

    btn.appendChild(previewContainer);
    
    const label = document.createElement('span');
    label.className = 'theme-name';
    label.textContent = theme.name;
    btn.appendChild(label);
    
    btn.addEventListener('click', () => {
      state.themeId = theme.id;
      document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      applyStyles();
    });
    
    themeSelectorEl.appendChild(btn);
  });
}

function renderUserInputs() {
  userListEl.innerHTML = '';
  const sortedUsers = [...state.users].map((user, originalIndex) => ({ ...user, originalIndex })).sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  sortedUsers.forEach((user, sortedIndex) => {
    const div = document.createElement('div');
    div.className = `user-item user-table-grid`;
    div.innerHTML = `
      <button class="visibility-toggle ${user.isHidden ? 'hidden' : ''}" data-userid="${user.id}" title="${translations[state.language].visibility}">
        <span class="material-symbols-rounded">${user.isHidden ? 'visibility_off' : 'visibility'}</span>
      </button>
      <input type="text" value="${user.id}" data-type="id" data-userid="${user.id}" placeholder="${translations[state.language].userId}" title="${translations[state.language].userId}" />
      <input type="text" value="${user.displayName || ''}" data-type="displayName" data-userid="${user.id}" placeholder="上書きする場合のみ入力" title="${translations[state.language].displayName}" ${user.isHidden ? 'disabled' : ''} />
      <input type="number" value="${user.priority ?? sortedIndex}" data-type="priority" data-userid="${user.id}" placeholder="0" title="${translations[state.language].priority}" ${user.isHidden ? 'disabled' : ''} />
      <input type="color" value="${user.color}" data-type="color" data-userid="${user.id}" title="${translations[state.language].userColor}" ${user.isHidden ? 'disabled' : ''} />

      <div class="user-actions">
        <span class="remove-user" data-userid="${user.id}">&times;</span>
      </div>
    `;
    userListEl.appendChild(div);
  });

  // Attach listeners to dynamic inputs
  userListEl.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
      const type = e.target.dataset.type;
      const userId = e.target.dataset.userid;
      const userIndex = state.users.findIndex(u => u.id === userId);
      if (userIndex === -1) return;
      let value = e.target.value;
      
      if (type === 'priority') {
        value = parseInt(value) || 0;
      }
      
      state.users[userIndex][type] = value;
      
      // If priority changed, we might want to re-render to show new order
      if (type === 'priority') {
        renderUserInputs();
      }
      
      applyStyles();
    });
  });

  userListEl.querySelectorAll('.remove-user').forEach(span => {
    span.addEventListener('click', (e) => {
      const userId = e.target.dataset.userid;
      const userIndex = state.users.findIndex(u => u.id === userId);
      if (userIndex === -1) return;
      state.users.splice(userIndex, 1);
      renderUserInputs();
      applyStyles();
    });
  });

  userListEl.querySelectorAll('.visibility-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const userId = e.target.dataset.userid || e.target.parentElement.dataset.userid;
      const userIndex = state.users.findIndex(u => u.id === userId);
      if (userIndex === -1) return;
      state.users[userIndex].isHidden = !state.users[userIndex].isHidden;
      renderUserInputs();
      applyStyles();
    });
  });
}

function updateLanguageUI() {
  const t = translations[state.language];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      // Skip elements that already have custom HTML content (like tabs with icons)
      if (el.querySelector('.material-symbols-rounded')) {
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
  document.getElementById('download-css').title = t.saveCss;
  document.getElementById('export-json').title = t.saveConfig;
  document.getElementById('import-json-btn').title = t.loadConfig;
}

function updateUIFromState() {
  // Sync inputs with state values
  document.getElementById('avatar-size').value = state.avatarSize;
  document.getElementById('avatar-size-slider').value = state.avatarSize;
  document.getElementById('base-font-size').value = state.baseFontSize;
  document.getElementById('base-font-size-slider').value = state.baseFontSize;
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

  syncToggleGroup('anim-type-group', state.animType);
  syncToggleGroup('layout-direction-group', state.direction);
  syncToggleGroup('layout-wrap-group', state.wrap);
  syncToggleGroup('layout-align-group', state.justifyContent);

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

  state.displayedUsers = displayedUsers;

  // Update simulator with displayed users
  updateSimulator(displayedUsers, state);
}

init();
