import circle from './themes/circle.css?raw';
import portrait from './themes/portrait.css?raw';
import actor from './themes/actor.css?raw';
import horizontal from './themes/horizontal.css?raw';
import vertical from './themes/vertical.css?raw';

/**
 * Theme Registry
 */

export const THEMES = [
  {
    id: 'circle',
    name: 'Circle',
    icon: 'Circle',
    previewScale: 0.38,
    previewTranslateY: 0,
    content: circle,
    cssPath: 'src/themes/circle.css',
    preview: '/src/assets/themes/circle.png', // Placeholder/Existing
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    }
  },
  {
    id: 'portrait',
    name: 'Portrait',
    icon: 'Portrait',
    previewScale: 0.3,
    previewTranslateY: 0,
    content: portrait,
    speakingAnimations: {
      bounce: false,
      glow: true,
      shake: false
    }
  },
  {
    id: 'actor',
    name: 'Actor',
    icon: 'Actor',
    previewScale: 0.38,
    previewTranslateY: 0,
    content: actor,
    speakingAnimations: {
      bounce: false,
      glow: false,
      shake: true
    }
  },
  {
    id: 'horizontal',
    name: 'Horizontal',
    icon: 'Horizontal',
    previewScale: 0.4,
    previewTranslateY: 0,
    content: horizontal,
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    }
  },
  {
    id: 'vertical',
    name: 'Vertical',
    icon: 'Vertical',
    previewScale: 0.4,
    previewTranslateY: 0,
    content: vertical,
    speakingAnimations: {
      bounce: true,
      glow: false,
      shake: false
    }
  }
];
