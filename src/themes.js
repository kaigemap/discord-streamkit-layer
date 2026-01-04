import circle from './themes/circle.css?raw';
import portrait from './themes/portrait.css?raw';
import actor from './themes/actor.css?raw';

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
    preview: '/src/assets/themes/circle.png' // Placeholder/Existing
  },
  {
    id: 'portrait',
    name: 'Portrait',
    icon: 'Portrait',
    previewScale: 0.3,
    previewTranslateY: 0,
    content: portrait
  },
  {
    id: 'actor',
    name: 'Actor',
    icon: 'Actor',
    previewScale: 0.38,
    previewTranslateY: 0,
    content: actor
  }
];
