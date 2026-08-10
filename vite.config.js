import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    entry: 'src/main.jsx',
    // /foo -> /foo/index.html, served cleanly at /foo by Netlify with no redirect rules.
    dirStyle: 'nested',
  },
})
