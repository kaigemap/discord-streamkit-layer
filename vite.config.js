import { defineConfig } from 'vite'

export default defineConfig({
  base: '/discord-streamkit-layer/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/index.js',
        assetFileNames: 'assets/index.[ext]'
      }
    }
  }
})
