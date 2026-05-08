import { THEMES } from './themes.js';

const VOICE_LIST = 'ul[class*="Voice_voiceStates"]';
const VOICE_STATE = 'li[class*="Voice_voiceState"]';
const AVATAR = 'img[class*="Voice_avatar"]';
const AVATAR_SPEAKING = 'img[class*="Voice_avatarSpeaking"]';
const USER = 'div[class*="Voice_user"]';
const NAME = 'span[class*="Voice_name"]';
const DEFAULT_SPEAKING_ANIMATIONS = { bounce: false, glow: false, shake: false };

export function generateCSS(config) {
  const {
    users,
    baseFontSize = 14,
    avatarSize = 100,
    gap = 0,
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'flex-start',
    themeId = 'default',
    defaultColor = '#ffffff',
    displayedUsers = [],
    padding = 20,
    borderRadius = 0,
    backgroundColor = 'rgba(0, 0, 0, 0)',
    nameBackgroundColor = 'rgba(30, 33, 36, 0.95)',
    shadowEnabled = true,
    speakingAnimations: configSpeakingAnimations,
    themeAnimations = {}
  } = config;

  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  const style = theme.style || 'default';
  const avatarBorderRadius = borderRadius >= 50 ? '999px' : `${borderRadius}px`;
  const defaultColorRgba = hexToRgba(defaultColor, 0.4);
  const speakingAnimations = {
    ...DEFAULT_SPEAKING_ANIMATIONS,
    ...(themeAnimations[themeId] || {}),
    ...(configSpeakingAnimations || {})
  };

  const context = {
    baseFontSize,
    avatarSize,
    gap,
    direction,
    wrap,
    justifyContent,
    defaultColor,
    defaultColorRgba,
    padding,
    borderRadius,
    avatarBorderRadius,
    backgroundColor,
    nameBackgroundColor,
    shadowEnabled,
    speakingAnimations,
    style
  };

  const blocks = [
    `/* --- Discord StreamKit Overlay Generated CSS --- */`,
    `/* Preset: ${theme.name} */`,
    getBaseLayer(context),
    getPresetLayer(context),
    getUnregisteredOrderLayer(config),
    getVisibilityLayer(config, context),
    getUserLayers(config, context),
    getNameVisibilityLayer(config),
    getAnimationCSS(speakingAnimations)
  ].filter(Boolean);

  return blocks.join('\n\n').trim();
}

function getBaseLayer(context) {
  return `body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  overflow: hidden;
}

:root {
  --user-color: ${context.defaultColor} !important;
  --user-color-alpha: ${context.defaultColorRgba} !important;
  --avatar-size: ${context.avatarSize}px !important;
  --base-font-size: ${context.baseFontSize}px !important;
  --container-padding: ${context.padding}px !important;
  --avatar-border-radius: ${context.avatarBorderRadius} !important;
  --container-border-radius: ${context.borderRadius}px !important;
  --container-background-color: ${context.backgroundColor} !important;
  --name-background-color: ${context.nameBackgroundColor} !important;
}`;
}

function getPresetLayer(context) {
  if (context.style === 'default') {
    return getDefaultSpeakingLayer(context);
  }

  const layers = [
    getLayoutLayer(context),
    getVisualLayer(context)
  ].filter(Boolean);

  return layers.join('\n\n');
}

function getDefaultSpeakingLayer(context) {
  if (!hasEnabledAnimation(context.speakingAnimations)) {
    return '';
  }

  return `${VOICE_STATE}.wrapper_speaking ${AVATAR},
${VOICE_STATE} ${AVATAR_SPEAKING} {
  ${getSpeakingAnimationValue(context.speakingAnimations)}
}`;
}

function getLayoutLayer(context) {
  if (context.style === 'actor') {
    return `${VOICE_LIST} {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(var(--avatar-size), var(--avatar-size))) !important;
  gap: ${context.gap}px !important;
  justify-content: ${context.justifyContent} !important;
  padding: var(--container-padding) !important;
  border-radius: var(--container-border-radius) !important;
  background-color: var(--container-background-color) !important;
}`;
  }

  return `${VOICE_LIST} {
  display: flex !important;
  flex-direction: ${context.direction} !important;
  flex-wrap: ${context.wrap} !important;
  justify-content: ${context.justifyContent} !important;
  gap: ${context.gap}px !important;
  width: auto !important;
  height: auto !important;
  padding: var(--container-padding) !important;
  border-radius: var(--container-border-radius) !important;
  background-color: var(--container-background-color) !important;
}`;
}

function getVisualLayer(context) {
  const variants = {
    circle: getCircleLayer,
    actor: getActorLayer,
    portrait: getPortraitLayer
  };

  const build = variants[context.style];
  return build ? build(context) : '';
}

function getCircleLayer(context) {
  const idleShadow = context.shadowEnabled ? '0 0 0 4px rgb(160, 160, 160)' : 'none';
  const speakingShadow = `0 0 0 4px ${context.defaultColor}, 0 0 0 16px ${context.defaultColorRgba}`;
  const animation = getSpeakingAnimationValue(context.speakingAnimations);
  return `${VOICE_STATE} {
  position: relative !important;
  display: block !important;
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important;
  padding: 0 !important;
}

${AVATAR} {
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important;
  display: block !important;
  border: none !important;
  border-radius: var(--avatar-border-radius) !important;
  filter: brightness(60%) !important;
  box-shadow: ${idleShadow} !important;
  transition: filter 0.1s ease, box-shadow 0.1s ease, transform 0.1s ease !important;
}

${USER} {
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 10 !important;
  display: block !important;
  pointer-events: none !important;
}

${NAME} {
  display: block !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  background: none !important;
  text-align: right !important;
  line-height: 1 !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 1)) !important;
}

${VOICE_STATE}.wrapper_speaking ${AVATAR},
${VOICE_STATE} ${AVATAR_SPEAKING} {
  filter: brightness(100%) !important;
  border: none !important;
  box-shadow: ${speakingShadow} !important;
  ${animation}
}`;
}

function getActorLayer(context) {
  const animation = getSpeakingAnimationValue(context.speakingAnimations);
  return `${VOICE_STATE} {
  position: relative !important;
  display: grid !important;
  grid-template-rows: minmax(0, 1fr) auto !important;
  align-items: stretch !important;
  width: var(--avatar-size) !important;
  height: var(--avatar-size) !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  border-radius: var(--container-border-radius) !important;
  background: var(--container-background-color) !important;
}

${AVATAR} {
  grid-row: 1 !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 0 !important;
  margin: 0 !important;
  object-fit: cover !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: brightness(60%) !important;
  transition: filter 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease !important;
}

${USER} {
  grid-row: 2 !important;
  display: block !important;
  min-width: 0 !important;
}

${NAME} {
  position: static !important;
  display: block !important;
  width: 100% !important;
  padding: 4px !important;
  background: var(--name-background-color) !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

${VOICE_STATE}.wrapper_speaking ${AVATAR},
${VOICE_STATE} ${AVATAR_SPEAKING} {
  filter: brightness(100%) !important;
  transform: scale(1.05) !important;
  border: none !important;
  box-shadow: none !important;
  ${animation}
}

${VOICE_STATE}.wrapper_speaking {
  box-shadow: 0 0 0 2px ${context.defaultColor}, 0 0 15px ${context.defaultColor} !important;
}
@supports selector(:has(*)) {
  ${VOICE_STATE}:has(${AVATAR_SPEAKING}) {
    box-shadow: 0 0 0 2px ${context.defaultColor}, 0 0 15px ${context.defaultColor} !important;
  }
}`;
}

function getPortraitLayer(context) {
  const animation = getSpeakingAnimationValue(context.speakingAnimations, { glowName: 'portrait-glow' });
  return `${VOICE_STATE} {
  position: relative !important;
  display: block !important;
  width: var(--avatar-size) !important;
  height: calc(var(--avatar-size) * 1.35) !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
}

${AVATAR} {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  object-fit: contain !important;
  object-position: center bottom !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  filter: brightness(62%) !important;
  transition: filter 0.18s ease, transform 0.18s ease !important;
}

${USER} {
  position: absolute !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  display: block !important;
  pointer-events: none !important;
}

${NAME} {
  display: block !important;
  width: max-content !important;
  max-width: 100% !important;
  margin: 0 auto !important;
  padding: 3px 7px !important;
  border-radius: 4px !important;
  background: var(--name-background-color) !important;
  color: white !important;
  text-align: center !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

${VOICE_STATE}.wrapper_speaking ${AVATAR},
${VOICE_STATE} ${AVATAR_SPEAKING} {
  filter: brightness(100%) drop-shadow(0 0 14px ${context.defaultColor}) !important;
  border: none !important;
  box-shadow: none !important;
  ${animation}
}`;
}

function getVisibilityLayer(config, context) {
  if (!config.onlyRegistered) {
    return '';
  }

  return `/* Hide unregistered members by default */
${VOICE_STATE} {
  display: none !important;
}`;
}

function getUnregisteredOrderLayer(config) {
  if (config.onlyRegistered) {
    return '';
  }

  return `/* Default order for unregistered members */
${VOICE_STATE} {
  order: ${config.unsetUserPriority ?? 100} !important;
}`;
}

function getUserLayers(config, context) {
  const sourceUsers = config.displayedUsers?.length > 0 ? config.displayedUsers : config.users;
  const sortedUsers = [...sourceUsers]
    .filter(user => !String(user.id).startsWith('unset_'))
    .sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));

  return sortedUsers.map((user, index) => getUserLayer(user, index, config, context)).filter(Boolean).join('\n\n');
}

function getUserLayer(user, index, config, context) {
  if (!user.id) return '';

  const userId = String(user.id);
  const userIdAttr = escapeCssString(userId);
  const userSelector = `${VOICE_STATE}[data-userid="${userIdAttr}"]`;
  const userSelectorFallback = `${VOICE_STATE}:has(${AVATAR}[src*="${userIdAttr}"])`;
  const avatarSelector = `${userSelector} ${AVATAR}`;
  const avatarFallback = `${userSelectorFallback} ${AVATAR}`;
  const nameSelector = `${userSelector} ${NAME}`;
  const nameFallback = `${userSelectorFallback} ${NAME}`;

  const defaultName = user.name || `User ${index + 1}`;
  const hasCustomName = user.displayName && user.displayName.trim() !== '';
  const displayName = hasCustomName ? user.displayName : defaultName;
  const displayNameCss = escapeCssString(displayName);
  const displayNameComment = escapeCssComment(displayName);
  const colorRGBA = hexToRgba(user.color, 0.4);

  if (user.isHidden) {
    return `/* User ${displayNameComment}: hidden */
${buildUserRule(userSelector, userSelectorFallback, 'display: none !important;')}`;
  }

  const blocks = [
    `/* User: ${displayNameComment} */`,
    buildUserRule(userSelector, userSelectorFallback, `--user-color: ${user.color} !important;\n  --user-color-alpha: ${colorRGBA} !important;`),
    buildUserRule(userSelector, userSelectorFallback, `order: ${user.priority ?? index} !important;`),
    config.onlyRegistered ? buildUserRule(userSelector, userSelectorFallback, `display: ${getVisibleVoiceStateDisplay(context.style)} !important;`) : '',
    hasCustomName ? getUserNameOverride(nameSelector, nameFallback, displayNameCss) : '',
    user.avatarUrl ? getAvatarOverride(avatarSelector, avatarFallback, user.avatarUrl, userId) : '',
    getUserVisualLayer(userSelector, userSelectorFallback, avatarSelector, avatarFallback, user, context)
  ].filter(Boolean);

  return blocks.join('\n');
}

function getUserNameOverride(nameSelector, nameFallback, displayNameCss) {
  const declaration = `font-size: 0 !important;\n  height: auto !important;`;
  const afterDeclaration = `content: "${displayNameCss}" !important;\n  display: block !important;\n  font-size: var(--base-font-size) !important;`;
  return `${buildUserRule(nameSelector, nameFallback, declaration)}
${buildUserRule(`${nameSelector}::after`, `${nameFallback}::after`, afterDeclaration)}`;
}

function getAvatarOverride(avatarSelector, avatarFallback, avatarUrl, userId) {
  const urlWithId = avatarUrl.includes('#id=') ? avatarUrl : `${avatarUrl}#id=${encodeURIComponent(userId)}`;
  return buildUserRule(avatarSelector, avatarFallback, `content: url("${escapeCssString(urlWithId)}") !important;\n  object-fit: cover !important;`);
}

function getUserVisualLayer(userSelector, userSelectorFallback, avatarSelector, avatarFallback, user, context) {
  const color = user.color;
  const colorRGBA = hexToRgba(color, 0.4);
  const speakingSelector = `${userSelector}.wrapper_speaking ${AVATAR},\n${userSelector} ${AVATAR_SPEAKING}`;
  const speakingFallback = `${userSelectorFallback}:has(${AVATAR_SPEAKING}) ${AVATAR},\n${avatarFallback}[class*="Voice_avatarSpeaking"]`;
  const animation = getSpeakingAnimationValue(context.speakingAnimations);
  const speakingAvatarReset = `border: none !important;\n  box-shadow: none !important;`;

  if (context.style === 'default') {
    const nameSelector = `${userSelector} ${NAME}`;
    const nameFallback = `${userSelectorFallback} ${NAME}`;
    return buildUserRule(nameSelector, nameFallback, `color: ${color} !important;`);
  }

  if (context.style === 'circle') {
    const highlight = buildUserRule(avatarSelector, avatarFallback, `box-shadow: 0 0 0 4px ${color} !important;`);
    const speaking = buildUserRule(speakingSelector, speakingFallback, `filter: brightness(100%) !important;\n  border: none !important;\n  box-shadow: 0 0 0 4px ${color}, 0 0 0 16px ${colorRGBA} !important;\n  ${animation}`);
    return `${highlight}\n${speaking}`;
  }

  if (context.style === 'actor') {
    const highlight = buildUserRule(userSelector, userSelectorFallback, `border: 2px solid ${color} !important;\n  box-shadow: none !important;\n  transition: box-shadow 0.18s ease !important;`);
    const speakingAvatar = buildUserRule(speakingSelector, speakingFallback, `filter: brightness(100%) !important;\n  transform: scale(1.05) !important;\n  ${speakingAvatarReset}\n  ${animation}`);
    const speakingCard = buildUserRule(`${userSelector}.wrapper_speaking`, `${userSelectorFallback}:has(${AVATAR_SPEAKING})`, `box-shadow: 0 0 0 2px ${color}, 0 0 15px ${color} !important;`);
    return `${highlight}\n${speakingAvatar}\n${speakingCard}`;
  }

  if (context.style === 'portrait') {
    const portraitAnimation = getSpeakingAnimationValue(context.speakingAnimations, { glowName: 'portrait-glow' });
    const highlight = buildUserRule(avatarSelector, avatarFallback, `filter: brightness(62%) drop-shadow(0 0 8px ${colorRGBA}) !important;`);
    const speaking = buildUserRule(speakingSelector, speakingFallback, `filter: brightness(100%) drop-shadow(0 0 14px ${color}) !important;\n  ${speakingAvatarReset}\n  ${portraitAnimation}`);
    return `${highlight}\n${speaking}`;
  }

  return '';
}

function getNameVisibilityLayer(config) {
  if (!config.hideNames) {
    return '';
  }

  return `/* Hide names */
${NAME} {
  display: none !important;
}`;
}

function getSpeakingAnimationValue(animations, options = {}) {
  const enabledAnimations = Object.keys(animations || {}).filter(key => animations[key] && !(options.excludeGlow && key === 'glow'));
  if (enabledAnimations.length === 0) {
    return 'animation: none !important;';
  }

  return `animation: ${enabledAnimations.map(anim => `${getAnimationName(anim, options)} 0.6s infinite`).join(', ')} !important;`;
}

function hasEnabledAnimation(animations) {
  return Object.values(animations || {}).some(Boolean);
}

function getAnimationName(animationType, options = {}) {
  if (animationType === 'glow' && options.glowName) {
    return `${options.glowName}-anim`;
  }
  return `${animationType}-anim`;
}

function getVisibleVoiceStateDisplay(style) {
  if (style === 'circle' || style === 'portrait') return 'block';
  if (style === 'actor') return 'grid';
  return 'flex';
}

function buildUserRule(selector, fallbackSelector, declaration) {
  return `${selector} {
  ${declaration}
}
@supports selector(:has(*)) {
  ${fallbackSelector} {
    ${declaration}
  }
}`;
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
}
@keyframes portrait-glow-anim {
  0%, 100% { filter: brightness(100%) drop-shadow(0 0 14px var(--user-color)); }
  50% { filter: brightness(128%) drop-shadow(0 0 22px var(--user-color)); }
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
  return css.trim();
}
