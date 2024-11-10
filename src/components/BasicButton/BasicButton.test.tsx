import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BasicButton from './BasicButton'

describe('BasicButton', () => {
  const basicConfig = {
    text: 'Test',
    onClick: vi.fn()
  }

  test('It should appear', () => {
    render(<BasicButton {...basicConfig} />)
    const testButton = screen.getByRole('button', { name: basicConfig.text })
    expect(testButton).toBeInTheDocument()
  })

  test('It should run the onclick button', () => {
    render(<BasicButton {...basicConfig} />)
    const testClickeableButton = screen.getByRole('button', {
      name: basicConfig.text
    })

    fireEvent.click(testClickeableButton)
    expect(testClickeableButton).toBeInTheDocument()
    expect(basicConfig.onClick).toHaveBeenCalled()
    expect(basicConfig.onClick).toHaveBeenCalledTimes(1)
  })
})
