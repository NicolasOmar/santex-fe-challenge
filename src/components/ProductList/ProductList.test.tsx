import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductList from './ProductList'
import { faker } from '@faker-js/faker'

describe('ProductList', () => {
  const basicConfig = {
    listHeaders: ['ID', 'Name', 'Price'],
    listData: Array(5)
      .fill(null)
      .map(() => ({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: faker.commerce.price({ min: 0, max: 1000000, dec: 0 })
      }))
  }

  test('It should appear', () => {
    render(<ProductList {...basicConfig} />)
    for (const dataItem of basicConfig.listData) {
      const testIdCell = screen.getByText(dataItem.id)
      const testNameCell = screen.getByText(dataItem.name)
      const testPriceCell = screen.getByText(dataItem.price)

      expect(testIdCell).toBeInTheDocument()
      expect(testNameCell).toBeInTheDocument()
      expect(testPriceCell).toBeInTheDocument()
    }
  })
})
