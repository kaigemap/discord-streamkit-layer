import { THEMES } from './themes.js';

export function generateCSS(config) {
  const {
    users, animType, baseFontSize, avatarSize = 100,
    gap = 0, direction = 'row', wrap = 'nowrap', justifyContent = 'flex-start',
    themeId = 'horizontal', defaultColor = '#ffffff', displayedUsers = []
  } = config;
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];

  const defaultColorRgba = hexToRgba(defaultColor, 0.4);

  let css = `
/* --- Discord Streamkit Overlay Generated CSS --- */
/* Theme: ${theme.name} */

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px;
  overflow: hidden;
}

/* Global Default Color */
:root {
  --user-color: ${defaultColor} !important;
  --user-color-alpha: ${defaultColorRgba} !important;
  --avatar-size: ${avatarSize}px !important;
  --base-font-size: ${baseFontSize}px !important;
}

/* Global Layout & Sizes */
ul[class*="Voice_voiceStates"] {
  display: flex !important;
  flex-direction: ${direction} !important;
  flex-wrap: ${wrap} !important;
  justify-content: ${justifyContent} !important;
  gap: ${gap}px !important;
  width: 100% !important;
  height: auto !important;
  margin-left: 10px !important;
  margin-top: 10px !important;
  padding: 20px !important; /* Padding for animation overflow in OBS */
}

span[class*="Voice_name"] {
  font-size: var(--base-font-size) !important;
  display: block;
}

li[class*="Voice_voiceState"] {
  align-items: center !important;
  margin: 0 !important; /* Reset legacy margins to favor Flex Gap */
}

img[class*="Voice_avatar"] {
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important; /* Reset legacy margins to favor Flex Gap */
}
`;

  // Get the core theme body
  const [structuralStyles, perUserStyles] = theme.content.split('/* --- User Highlight --- */');

  // If Solo-mode is ON, hide everyone by default
  if (config.onlyRegistered) {
    css += `\n/* Solo Mode: Hide all by default */\nli[class*="Voice_voiceState"] {\n  display: none !important;\n}\n`;
  }

  css += structuralStyles.replace(/{{avatarSize}}/g, avatarSize);

  // Use displayedUsers instead of just registered users to include unset users
  const sortedDisplayedUsers = [...displayedUsers].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));

  sortedDisplayedUsers.forEach((user, index) => {
    if (!user.id) return;

    // Ensure user.id is a string and safe
    const safeUserId = String(user.id).replace(/[^a-zA-Z0-9_]/g, '');

    const defaultName = user.name || `User ${index + 1}`;
    const displayName = user.displayName && user.displayName.trim() !== '' ? user.displayName : defaultName;

    // Check per-user visibility (Hide-list)
    if (user.isHidden) {
      css += `\n/* User ${displayName} is in Hide-list */\nli[class*="Voice_voiceState"]:has(img[src*="${safeUserId}"]) {\n  display: none !important;\n}\n`;
      return; // Skip other styles for hidden users
    }

    const colorRGBA = hexToRgba(user.color, 0.4);

    let userCSS = perUserStyles
      .replace(/USER_ID/g, safeUserId)
      .replace(/var\(--user-color\)/g, user.color)
      .replace(/var\(--user-color-alpha\)/g, colorRGBA)
      .replace(/{{avatarSize}}/g, avatarSize);

    // Always override with displayName
    userCSS += `\n/* Override custom name */\nimg[src*="${safeUserId}"] + div[class*="Voice_user"] span[class*="Voice_name"]::after {\n  content: "${displayName}" !important;\n  display: block !important;\n  font-size: var(--base-font-size) !important;\n}\nimg[src*="${safeUserId}"] + div[class*="Voice_user"] span[class*="Voice_name"] {\n  font-size: 0 !important;\n  height: auto !important;\n}\n`;

    // Avatar Override
    if (user.avatarUrl) {
      // Append #id=... to the URL so that img[src*="ID"] selector still matches
      const urlWithId = user.avatarUrl.includes('#id=') ? user.avatarUrl : `${user.avatarUrl}#id=${safeUserId}`;
      userCSS += `\n/* Override Avatar */\nimg[src*="${safeUserId}"] {\n  content: url("${urlWithId}") !important;\n  object-fit: cover !important;\n}\n`;
    }

    css += `\n/* User: ${displayName} */\n`;
    // If Solo Mode is ON, we must force-show the registered players
    if (config.onlyRegistered) {
      css += `li[class*="Voice_voiceState"]:has(img[src*="${safeUserId}"]) {\n  display: flex !important;\n}\n`;
    }
    css += `${userCSS}\n`;

    // If Solo Mode is ON, explicitly hide unset users
    if (config.onlyRegistered && user.id.startsWith('unset_')) {
      css += `li[class*="Voice_voiceState"]:has(img[src*="${safeUserId}"]) {\n  display: none !important;\n}\n`;
    }
  });

  // Global Name Visibility Control
  if (config.hideNames) {
    css += `\n/* Global Hide Names */\nspan[class*="Voice_name"] {\n  display: none !important;\n}\n`;
  }

  // Add Keyframe Animations
  css += getAnimationCSS(animType);

  return css.trim();
}

function hexToRgba(hex, alpha) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getAnimationCSS(type) {
  switch (type) {
    case 'bounce':
      return `
@keyframes bounce-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`;
    case 'glow':
      return `
@keyframes glow-anim {
  0%, 100% { filter: brightness(100%); }
  50% { filter: brightness(130%); }
}`;
    case 'shake':
      return `
@keyframes shake-anim {
  0% { transform: rotate(0); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0); }
}`;
    default:
      return '';
  }
}
