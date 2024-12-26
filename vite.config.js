import { defineConfig } from 'vite'
import define           from  './vite.defs.js'
import react            from '@vitejs/plugin-react'
import svgr             from 'vite-plugin-svgr'
import jsconfigPaths    from 'vite-jsconfig-paths'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/badgerpower.local.wardley.org-key.pem'),
  cert: fs.readFileSync('etc/badgerpower.local.wardley.org.pem'),
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths({ root: '../' })
  ],
  root: 'web',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../html',
    chunkSizeWarningLimit: 850
  },
  server: {
    host: 'badgerpower.local.wardley.org',
    port: 4011,
    https
  }
})
