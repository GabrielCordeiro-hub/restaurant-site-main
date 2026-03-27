import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/Usuario/.gemini/antigravity/brain/07e0f904-4b01-4396-b228-3d2ad88d9b9d',
        '.'
      ]
    }
  },
  resolve: {
    alias: {
      '@brain': 'C:/Users/Usuario/.gemini/antigravity/brain/07e0f904-4b01-4396-b228-3d2ad88d9b9d'
    }
  }
})
