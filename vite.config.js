import { defineConfig } from 'vite'

export default defineConfig({
  base: '/PiGL.js/',
  build: {
    assetsDir: 'static',
    lib: process.env.BUILD_LIB
      ? {
          entry: 'src/index.js',
          name: 'PiGL',
          fileName: 'pigl',
          formats: ['es', 'umd']
        }
      : undefined,
  },
})
