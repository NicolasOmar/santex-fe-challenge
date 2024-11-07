import { MockedProvider } from '@apollo/client/testing'
import ProductList from '@components/ProductList/ProductList'
import { render } from '@testing-library/react'

describe('ProductList', () => {
  it('renders text and button', async () => {
    render(
      <MockedProvider
        mocks={[]}
        addTypename={false}
      >
        <ProductList
          listHeaders={[]}
          listData={[]}
        />
      </MockedProvider>
    )

    await new Promise(resolve => setTimeout(resolve, 0))
  })
})
