import { THEMES } from './themes.js';

export function generateCSS(config) {
  const {
    users, baseFontSize, avatarSize = 100,
    gap = 0, direction = 'row', wrap = 'nowrap', justifyContent = 'flex-start',
    themeId = 'horizontal', defaultColor = '#ffffff', displayedUsers = [],
    padding = 20, borderRadius = 0, backgroundColor = 'rgba(0, 0, 0, 0)', nameBackgroundColor = 'rgba(30, 33, 36, 0.95)',
    shadowEnabled = true, themeAnimations = {}
  } = config;
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  const speakingAnimations = themeAnimations[themeId] || theme.speakingAnimations || { bounce: true };
  const finalSpeakingAnimations = speakingAnimations;
  const avatarBorderRadius = borderRadius >= 50 ? '999px' : `${borderRadius}px`;

  const defaultColorRgba = hexToRgba(defaultColor, 0.4);

  // Add global styles and theme content
  let themeContent = theme.content;
  if (!shadowEnabled) {
    // Replace box-shadow with none when shadow is disabled
    themeContent = themeContent.replace(/box-shadow\s*:\s*[^;]+;/g, 'box-shadow: none;');
  }
  // Replace animation name with theme-specific animations
  const enabledAnimations = Object.keys(finalSpeakingAnimations).filter(key => finalSpeakingAnimations[key]);
  if (enabledAnimations.length > 0) {
    const animationValue = enabledAnimations.map(anim => `${anim}-anim 0.6s infinite`).join(', ');
    themeContent = themeContent.replace(/animation:\s*bounce-anim[^;]*/g, `animation: ${animationValue}`);
  } else {
    themeContent = themeContent.replace(/animation:\s*bounce-anim[^;]*/g, 'animation: none');
  }
  const visibleVoiceStateDisplay = getVoiceStateDisplay(themeContent);

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
  --container-padding: ${padding}px !important;
  --avatar-border-radius: ${avatarBorderRadius} !important;
  --container-border-radius: ${borderRadius}px !important;
  --container-background-color: ${backgroundColor} !important;
  --name-background-color: ${nameBackgroundColor} !important;
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
  padding: var(--container-padding) !important; /* Padding for animation overflow in OBS */
  border-radius: var(--container-border-radius) !important;
  background-color: var(--container-background-color) !important;
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
` + themeContent;

  // Split theme content for per-user styles (after global styles)
  const globalAndTheme = css;
  const parts = globalAndTheme.split('/* --- User Highlight --- */');
  let structuralStyles = parts[0];
  const perUserStyles = parts[1] || '';

  // If Solo-mode is ON, hide everyone by default
  if (config.onlyRegistered) {
    css = structuralStyles + `\n/* Solo Mode: Hide all by default */\nli[class*="Voice_voiceState"] {\n  display: none !important;\n}\n` + perUserStyles;
  } else {
    css = structuralStyles + perUserStyles;
  }

  // Use displayedUsers instead of just registered users to include unset users
  const sourceUsers = displayedUsers.length > 0 ? displayedUsers : users;
  const sortedDisplayedUsers = [...sourceUsers].filter(user => !String(user.id).startsWith('unset_')).sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));

  sortedDisplayedUsers.forEach((user, index) => {
    if (!user.id) return;

    const userId = String(user.id);
    const userIdAttr = escapeCssString(userId);
    const userSelector = `li[class*="Voice_voiceState"][data-userid="${userIdAttr}"]`;
    const userSelectorFallback = `li[class*="Voice_voiceState"]:has(img[src*="${userIdAttr}"])`;

    const defaultName = user.name || `User ${index + 1}`;
    const displayName = user.displayName && user.displayName.trim() !== '' ? user.displayName : defaultName;
    const displayNameCss = escapeCssString(displayName);
    const displayNameComment = escapeCssComment(displayName);

    // Check per-user visibility (Hide-list)
    if (user.isHidden) {
      css += `\n/* User ${displayNameComment} is in Hide-list */\n${buildUserRule(userSelector, userSelectorFallback, 'display: none !important;')}\n`;
      return; // Skip other styles for hidden users
    }

    const colorRGBA = hexToRgba(user.color, 0.4);
    const scopedUserVars = `--user-color: ${user.color} !important;\n  --user-color-alpha: ${colorRGBA} !important;`;

    let userCSS = perUserStyles
      .replace(/USER_ID/g, userIdAttr)
      .replace(/var\(--user-color\)/g, user.color)
      .replace(/var\(--user-color-alpha\)/g, colorRGBA)
      .replace(/{{avatarSize}}/g, avatarSize);

    // Always override with displayName
    userCSS += `\n/* Override custom name */\nimg[src*="${userIdAttr}"] + div[class*="Voice_user"] span[class*="Voice_name"]::after {\n  content: "${displayNameCss}" !important;\n  display: block !important;\n  font-size: var(--base-font-size) !important;\n}\nimg[src*="${userIdAttr}"] + div[class*="Voice_user"] span[class*="Voice_name"] {\n  font-size: 0 !important;\n  height: auto !important;\n}\n`;

    // Apply order based on sorted index
    userCSS += `\n/* Order override */\n${buildUserRule(userSelector, userSelectorFallback, `order: ${index} !important;`)}\n`;

    // Avatar Override
    if (user.avatarUrl) {
      // Append #id=... to the URL so that img[src*="ID"] selector still matches
      const urlWithId = user.avatarUrl.includes('#id=') ? user.avatarUrl : `${user.avatarUrl}#id=${encodeURIComponent(userId)}`;
      userCSS += `\n/* Override Avatar */\nimg[src*="${userIdAttr}"] {\n  content: url("${escapeCssString(urlWithId)}") !important;\n  object-fit: cover !important;\n}\n`;
    }

    css += `\n/* User: ${displayNameComment} */\n`;
    css += buildUserRule(userSelector, userSelectorFallback, scopedUserVars) + '\n';
    // If Solo Mode is ON, we must force-show the registered players
    if (config.onlyRegistered) {
      css += buildUserRule(userSelector, userSelectorFallback, `display: ${visibleVoiceStateDisplay} !important;`) + '\n';
    }
    css += `${userCSS}\n`;

    // If Solo Mode is ON, explicitly hide unset users
    if (config.onlyRegistered && userId.startsWith('unset_')) {
      css += buildUserRule(userSelector, userSelectorFallback, 'display: none !important;') + '\n';
    }
  });

  // Global Name Visibility Control
  if (config.hideNames) {
    css += `\n/* Global Hide Names */\nspan[class*="Voice_name"] {\n  display: none !important;\n}\n`;
  }

  // Add Keyframe Animations
  css += getAnimationCSS(finalSpeakingAnimations);

  return css.trim();
}

function getVoiceStateDisplay(themeContent) {
  const voiceStateRule = themeContent.match(/li\[class[\*\^]?="Voice_voiceState"\]\s*\{[^}]*display\s*:\s*([^;!]+)(?:\s*!important)?\s*;/);
  return voiceStateRule ? voiceStateRule[1].trim() : 'flex';
}

function buildUserRule(selector, fallbackSelector, declaration) {
  return `${selector} {\n  ${declaration}\n}\n@supports selector(:has(*)) {\n  ${fallbackSelector} {\n    ${declaration}\n  }\n}`;
}

function escapeCssString(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\A ')
    .replace(/\r/g, '');
}

function escapeCssComment(value) {
  return String(value).replace(/\*\//g, '* /').replace(/\r?\n/g, ' ');
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

export function getAnimationCSS(animations) {
  let css = '';
  if (animations.bounce) {
    css += `
@keyframes bounce-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`;
  }
  if (animations.glow) {
    css += `
@keyframes glow-anim {
  0%, 100% { filter: brightness(100%); }
  50% { filter: brightness(130%); }
}`;
  }
  if (animations.shake) {
    css += `
@keyframes shake-anim {
  0% { transform: rotate(0); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0); }
}`;
  }
  return css;
}
