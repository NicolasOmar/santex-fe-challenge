import { describe, test, expect } from 'vitest'
import { MockedProvider } from '@apollo/client/testing'
import { GET_PRODUCT_LIST } from '@graphql/queries'
import { ADD_ITEM_TO_ORDER } from '@graphql/mutations'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { faker } from '@faker-js/faker'

const mockedData = Array(5)
  .fill(null)
  .map(() => ({
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    featuredAsset: null,
    variants: [
      {
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        featuredAsset: null,
        priceWithTax: faker.commerce.price({ min: 0, max: 1000000, dec: 0 })
      }
    ]
  }))

describe('ProductList', () => {
  const filledMocks = [
    {
      request: {
        query: GET_PRODUCT_LIST
      },
      result: {
        data: {
          products: {
            items: mockedData
          }
        }
      }
    },
    {
      request: {
        query: ADD_ITEM_TO_ORDER,
        variables: {
          productVariantId: mockedData[0].variants[0].id,
          quantity: 1
        }
      },
      result: {
        data: {
          addItemToOrder: {}
        }
      }
    }
  ]

  test('It should appear table with data', async () => {
    render(
      <MockedProvider
        mocks={filledMocks}
        addTypename={false}
      >
        <App />
      </MockedProvider>
    )

    for (const mockedProduct of mockedData) {
      const mockedVariant = mockedProduct.variants[0]
      expect(
        await screen.findByText(mockedProduct.description)
      ).toBeInTheDocument()
      expect(await screen.findByText(mockedVariant.name)).toBeInTheDocument()
    }
  })

  test('It should execute the mutation', async () => {
    render(
      <MockedProvider
        mocks={filledMocks}
        addTypename={false}
      >
        <App />
      </MockedProvider>
    )

    const testClickButtons = await screen.findAllByRole('button', {
      name: 'Buy'
    })
    expect(testClickButtons.length).toBe(mockedData.length)

    await fireEvent.click(testClickButtons[0])
    expect(testClickButtons.length).toBe(mockedData.length)
  })
})
