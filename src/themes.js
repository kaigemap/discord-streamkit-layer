import circle from './themes/circle.css?raw';
import horizontal from './themes/horizontal.css?raw';
import vertical from './themes/vertical.css?raw';
import portrait from './themes/portrait.css?raw';

/**
 * Theme Registry
 */

export const THEMES = [
  {
    id: 'horizontal',
    name: 'Horizontal',
    icon: 'Horizontal', // Placeholder name
    previewScale: 0.38,
    previewTranslateY: 0,
    content: horizontal
  },
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
    id: 'vertical',
    name: 'Vertical',
    icon: 'Vertical',
    previewScale: 0.28,
    previewTranslateY: -10,
    content: vertical
  },
  {
    id: 'portrait',
    name: 'Portrait',
    icon: 'Portrait',
    previewScale: 0.3,
    previewTranslateY: 0,
    content: portrait
  }
];
