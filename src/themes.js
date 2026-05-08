/**
 * Preset Registry
 *
 * Presets describe intent. The generator turns these descriptors into the
 * smallest set of CSS overrides needed for the selected look.
 */

export const PRESETS = [
  {
    id: 'default',
    name: 'Discord Default',
    icon: 'Default',
    previewScale: 0.44,
    previewTranslateY: 0,
    style: 'default'
  },
  {
    id: 'circle',
    name: 'Circle',
    icon: 'Circle',
    previewScale: 0.32,
    previewTranslateY: 0,
    style: 'circle'
  },
  {
    id: 'actor',
    name: 'Actor',
    icon: 'Actor',
    previewScale: 0.3,
    previewTranslateY: 0,
    style: 'actor'
  },
  {
    id: 'portrait',
    name: 'Portrait',
    icon: 'Portrait',
    previewScale: 0.36,
    previewTranslateY: 0,
    style: 'portrait'
  }
];

// Backward compatibility
export const THEMES = PRESETS;
