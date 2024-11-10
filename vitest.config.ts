import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watch: false,
    reporters: 'verbose',
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{tsx,ts}'],
    coverage: {
      include: ['src/**/*.{tsx,ts}'],
      exclude: ['src/graphql/**/*', 'src/interfaces/**/*'],
      reporter: ['html', 'lcov']
    }
  },
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
