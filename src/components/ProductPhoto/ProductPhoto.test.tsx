import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductPhoto from './ProductPhoto'

describe('ProductPhoto', () => {
  const basicConfig = {
    src: 'test.logo.src'
  }
  const fallbackConfig = {
    src: null,
    fallbackText: '-'
  }

  test('It should appear', () => {
    render(<ProductPhoto {...basicConfig} />)
    const testPhoto = screen.getByRole('img')

    expect(testPhoto).toBeInTheDocument()
  })

  test('It should appear its fallback version', () => {
    render(<ProductPhoto {...fallbackConfig} />)
    const testFallbackPhoto = screen.getByText(fallbackConfig.fallbackText)

    expect(testFallbackPhoto).toBeInTheDocument()
  })
})
