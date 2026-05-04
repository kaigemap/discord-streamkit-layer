import circle from './themes/circle.css?raw';
import portrait from './themes/portrait.css?raw';
import actor from './themes/actor.css?raw';
import horizontal from './themes/horizontal.css?raw';
import vertical from './themes/vertical.css?raw';

/**
 * Theme Registry
 */

export const PRESETS = [
  {
    id: 'circle',
    name: 'Circle',
    icon: 'Circle',
    previewScale: 0.32,
    previewTranslateY: 0,
    content: circle,
    cssPath: 'src/themes/circle.css',
    preview: '/src/assets/themes/circle.png', // Placeholder/Existing
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    },
    preset: {
      direction: 'row',
      wrap: 'wrap',
      justifyContent: 'flex-start',
      gap: 10,
      avatarSize: 100,
      baseFontSize: 14,
      padding: 20,
      borderRadius: 50,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      nameBackgroundColor: 'rgba(30, 33, 36, 0.95)',
      shadowEnabled: true,
      hideNames: true,
      onlyRegistered: false,
      unsetUserCount: 3,
      defaultColor: '#ffffff'
    }
  },
  {
    id: 'actor',
    name: 'Actor',
    icon: 'Actor',
    previewScale: 0.3,
    previewTranslateY: 0,
    content: actor,
    speakingAnimations: {
      bounce: true,
      glow: true,
      shake: false
    },
    preset: {
      direction: 'row',
      wrap: 'nowrap',
      justifyContent: 'center',
      gap: 20,
      avatarSize: 120,
      baseFontSize: 16,
      padding: 30,
      borderRadius: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      nameBackgroundColor: 'rgba(30, 33, 36, 0.95)',
      shadowEnabled: true,
      hideNames: false,
      onlyRegistered: false,
      unsetUserCount: 3,
      defaultColor: '#ffffff'
    }
  },
  {
    id: 'horizontal',
    name: 'Horizontal',
    icon: 'Horizontal',
    previewScale: 0.46,
    previewTranslateY: 0,
    content: horizontal,
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    },
    preset: {
      direction: 'row',
      wrap: 'nowrap',
      justifyContent: 'flex-start',
      gap: 5,
      avatarSize: 64,
      baseFontSize: 14,
      padding: 10,
      borderRadius: 50,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      nameBackgroundColor: 'rgba(30, 33, 36, 0.95)',
      shadowEnabled: true,
      hideNames: false,
      onlyRegistered: false,
      unsetUserCount: 3,
      defaultColor: '#ffffff'
    }
  },
  {
    id: 'vertical',
    name: 'Vertical',
    icon: 'Vertical',
    previewScale: 0.36,
    previewTranslateY: 0,
    content: vertical,
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    },
    preset: {
      direction: 'column',
      wrap: 'nowrap',
      justifyContent: 'flex-start',
      gap: 10,
      avatarSize: 80,
      baseFontSize: 14,
      padding: 20,
      borderRadius: 50,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      nameBackgroundColor: 'rgba(30, 33, 36, 0.95)',
      shadowEnabled: true,
      hideNames: false,
      onlyRegistered: false,
      unsetUserCount: 3,
      defaultColor: '#ffffff'
    }
  },
  {
    id: 'portrait',
    name: 'Portrait',
    icon: 'Portrait',
    previewScale: 0.36,
    previewTranslateY: 0,
    content: portrait,
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    },
    preset: {
      direction: 'row',
      wrap: 'nowrap',
      justifyContent: 'flex-start',
      gap: 8,
      avatarSize: 140,
      baseFontSize: 12,
      padding: 24,
      borderRadius: 0,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      nameBackgroundColor: 'rgba(30, 33, 36, 0.95)',
      shadowEnabled: true,
      hideNames: true,
      onlyRegistered: false,
      unsetUserCount: 3,
      defaultColor: '#ffffff'
    }
  }
];

// Backward compatibility
export const THEMES = PRESETS;
