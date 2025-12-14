import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ - force restart
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
})
