import { useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_LIST } from '@graphql/queries'
import { Avatar, CircularProgress } from '@mui/material'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import BasicButton from '@components/BasicButton/BasicButton'
import { ProductItemVariant, ProductListResposne } from '@interfaces/graphql'
import './App.css'

const App = () => {
  const { data: productList, loading: isLoadingProductList } =
    useQuery<ProductListResposne>(GET_PRODUCT_LIST)
  const [subTotal, setSubTotal] = useState<number>(0)

  const headerConfig = {
    logoSrc:
      'https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png',
    subTotalAmount: subTotal
  }
  const productGridHeaders = [
    'Image',
    'Name',
    'Description',
    'Price',
    'Actions'
  ]
  const productGridData = useMemo(() => {
    const productItems = productList?.products.items ?? null
    if (productItems != null) {
      return productItems.map(_productItem => {
        const variantsAreLoaded = Array.isArray(_productItem.variants) && _productItem.variants.length > 0
        
        return variantsAreLoaded ? (
          _productItem.variants.map(_variant => ({
            image: _variant.featuredAsset?.source ? (
              <Avatar
                src={_variant.featuredAsset.source}
                sx={{ width: '100', height: '100' }}
              />
            ) : (
              <Avatar
                variant='square'
              >
                  -
              </Avatar>
            ),
            name: _variant.name,
            description: _productItem.description,
            price: _variant.priceWithTax,
            action: (
              <BasicButton
                text='Buy'
                onClick={() => handleBuyButtonClick(_variant)}
              />
            )
          }))
        ) : []
      }).flat()
    }
  }, [productList])

  const handleBuyButtonClick = (productToBuy: ProductItemVariant) => {
    setSubTotal(_oldValue => _oldValue + productToBuy.priceWithTax)
  }

  return (
    <>
      <Header {...headerConfig} />
      {isLoadingProductList ? (
        <section className='app-loading'>
          <CircularProgress
            size={'8rem'}
            color={'success'}
          />
        </section>
      ) : (
        productGridData ? (
          <ProductList
            listHeaders={productGridHeaders}
            listData={productGridData}
          />
        ) : null
      )}
    </>
  )
}

export default App
