# AGENTS.md

This file records project-specific guidance for AI coding agents working on DiscordPyoko.

## Product Context

DiscordPyoko is a practical web tool for generating custom CSS for Discord StreamKit voice overlays. It is not a marketing site. Keep the first screen focused on the actual workflow: presets, member-specific overrides, live preview, and CSS export.

The generated CSS is intended for OBS/StreamKit use. Stability across OBS Browser Source environments matters more than clever CSS.

## UI Direction

- Use a restrained shadcn-like tone: neutral dark surfaces, thin borders, compact typography, low-radius corners, quiet interaction states, and limited accent color.
- Prefer pane-based structure inspired by Sociomedia SHIG: keep editing controls separate from the live overlay preview, and keep the preview as the primary work object.
- Treat presets, members, layout, preview, and CSS output as concrete objects/actions. Avoid vague feature explanations.
- Avoid "AI-generated" visual tropes: oversized hero sections, decorative gradients, floating blobs, emoji icons, busy nested cards, loud accent colors, and generic marketing copy.
- Keep visible text short and task-oriented. Do not add instructional prose unless it directly prevents a workflow mistake.
- Prefer familiar controls: color inputs for swatches, range sliders for numeric visual values, segmented buttons for small option sets, icon buttons for copy/download/save/load.
- Preserve responsive usability. On narrow screens, controls should stack without horizontal overflow, clipped labels, or clipped button text.

## CSS And Implementation

- Plain CSS is preferred. Keep app styling in `src/style.css` unless there is a clear reason to split files.
- Do not add UI libraries unless explicitly requested.
- Keep JavaScript modular in the existing `src/` files and avoid broad rewrites of CSS generation logic when changing UI.
- Avoid inline styles in generated app DOM where a CSS class would be clearer. Generated overlay simulation markup may mirror StreamKit inline defaults when useful.
- Escape user-provided values before inserting them into HTML or generated CSS. User IDs, display names, and avatar URLs can contain characters that break selectors or strings.
- Prefer `data-userid` selectors for generated CSS when targeting users. `:has()` may be used only as a progressive fallback inside `@supports selector(:has(*))`, because OBS Browser Source/CEF versions can vary.
- Do not let visibility logic override theme-specific layout. For example, when restoring a hidden voice state, preserve the theme's intended `display` value instead of forcing `display: flex`.

## Reference Files

- `reference/legacy-css/` contains old hand-authored/generated CSS kept for behavior reference.
- These reference files are not used by the current app, Vite build, or GitHub Pages output.
- Do not delete or rewrite reference files as part of normal cleanup unless explicitly asked.

## Build And Pages

- Treat `index.html` and `src/` as the editable source of truth.
- Vite builds to `docs/` via `vite.config.js`.
- GitHub Pages should serve `docs/`, not `dist/`.
- `dist/` is not used in this repository.
- Do not edit `docs/` directly. Change source files, then run `npm run build` so `docs/` is regenerated.
- Run `npm run build` after changes that affect app code, CSS, HTML, or generated Pages output.

## Release Notes For Agents

- Do not deploy, push, or publish without explicit permission.
- This project has a history of accidental AI-driven deploys; treat deployment as a separate user-approved action.
- Communicate in Japanese unless the user requests otherwise.
