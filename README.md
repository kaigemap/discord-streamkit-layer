# Discord StreamKit Overlay Generator

A web-based tool for generating custom CSS overlays for Discord StreamKit voice states.

## Features

- **Customizable Themes**: Choose from multiple predefined themes
- **Individual User Settings**: Configure display names, colors, and priorities for each user
- **Visibility Controls**: Hide/show individual users or restrict to registered users only
- **Layout Options**: Control spacing, direction, wrapping, and alignment
- **Real-time Preview**: See changes instantly in the Discord simulator
- **CSS Export**: Generate and download overlay CSS for use with OBS or StreamLabs

## Usage

1. Visit the [live demo](https://your-username.github.io/streamkitdiscordoverlay/)
2. Configure your settings in the sidebar
3. Add individual user settings with custom names and colors
4. Use the visibility toggle to hide specific users
5. Copy or download the generated CSS
6. Add the CSS file to your streaming software

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

1. Build the project: `npm run build`
2. Copy build files to docs: `cp -r dist/* docs/`
3. Commit and push changes to main branch
4. Enable GitHub Pages in repository settings, selecting `docs/` as the source

## License

MIT License
