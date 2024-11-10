import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@graphql': '/src/graphql',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces',
      '@utils': '/src/utils'
    }
  }
})
