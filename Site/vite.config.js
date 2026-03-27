import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/Usuario/.gemini/antigravity/brain/51866809-1e05-4196-8488-85fe7ba557a1',
        '.'
      ]
    }
  },
  resolve: {
    alias: {
      '@brain': path.resolve(__dirname, 'src/assets/images')
    }
  }
})
