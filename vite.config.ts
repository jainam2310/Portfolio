import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio/', // Your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
