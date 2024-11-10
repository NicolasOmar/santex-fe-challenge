import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'
import { currencyFormatter } from '@utils/formatters'

describe('Header', () => {
  const basicConfig = {
    logoSrc: 'test.logo.src',
    subTotalAmount: 0
  }

  test('It should appear', () => {
    render(<Header {...basicConfig} />)
    const testHeader = screen.getByRole('img')
    const testSubTotal = screen.getByText(
      currencyFormatter.format(basicConfig.subTotalAmount)
    )

    expect(testHeader).toBeInTheDocument()
    expect(testSubTotal).toBeInTheDocument()
  })

  test('It should show formatter subtotal', () => {
    const customSubTotal = 10000
    const formattedSubTotal = currencyFormatter.format(customSubTotal)
    render(<Header {...{ ...basicConfig, subTotalAmount: customSubTotal }} />)
    const testSubTotal = screen.getByText(formattedSubTotal)

    expect(testSubTotal).toBeInTheDocument()
    expect(testSubTotal.innerHTML).toBe(formattedSubTotal)
  })
})
