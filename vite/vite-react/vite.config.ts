import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      "@/styles": "/src/styles",
    }
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
