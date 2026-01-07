# DiscordPyoko

A web-based tool for generating custom CSS overlays for Discord StreamKit voice states.

## Features

- **Customizable Themes**: Choose from multiple predefined themes
- **Individual User Settings**: Configure display names, colors, and priorities for each user
- **Visibility Controls**: Hide/show individual users or restrict to registered users only
- **Unset User Count**: Adjust the number of placeholder unset users for simulation and preview
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

## Discord StreamKit Overlay Structure

Based on Discord StreamKit voice overlay HTML structure (as of 2025/12/29):

```html
<div class="Voice_voiceContainer voice_container">
  <ul class="Voice_voiceStates voice_states">
    <li class="Voice_voiceState voice_state" data-userid="...">
      <img class="Voice_avatar voice_avatar" src="..." />
      <div class="Voice_user voice_username">
        <span class="Voice_name" style="color: rgb(255, 255, 255); font-size: 14px; background-color: rgba(30, 33, 36, 0.95);">...</span>
      </div>
    </li>
  </ul>
</div>
```

- Classes use CSS Modules with hashes (e.g., `Voice_voiceStates__a121W`)
- Speaking state adds `Voice_avatarSpeaking__lE+4m` class to img
- Generated CSS uses `[class*="Voice_*"]` selectors to match hashed classes

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
