import { useMemo } from 'react'
// API
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_LIST } from '@graphql/queries'
// COMPONENTS
import { Backdrop, CircularProgress } from '@mui/material'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import BasicButton from '@components/BasicButton/BasicButton'
import ProductPhoto from '@components/ProductPhoto/ProductPhoto'
// INTERFACES
import { ProductItemVariant, ProductListResposne } from '@interfaces/graphql'
// UTILS
import { currencyFormatter } from '@utils/formatters'
import { useStateWithStorage } from '@hooks/useStateWithStorage'

const App = () => {
  const { data: productList, loading: isLoadingProductList } =
    useQuery<ProductListResposne>(GET_PRODUCT_LIST)
  const { subTotal, addSubTotal } = useStateWithStorage()

  const handleBuyButtonClick = (productToBuy: ProductItemVariant) => {
    addSubTotal(productToBuy.priceWithTax)
  }

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
      return productItems
        .map(_productItem => {
          const variantsAreLoaded =
            Array.isArray(_productItem.variants) &&
            _productItem.variants.length > 0

          return variantsAreLoaded
            ? _productItem.variants.map(_variant => {
                const parsedPrice = currencyFormatter.format(
                  _variant.priceWithTax
                )

                return {
                  image: (
                    <ProductPhoto
                      src={_variant.featuredAsset?.source ?? null}
                      fallbackText='-'
                    />
                  ),
                  name: _variant.name,
                  description: _productItem.description,
                  price: parsedPrice,
                  action: (
                    <BasicButton
                      text='Buy'
                      onClick={() => handleBuyButtonClick(_variant)}
                    />
                  )
                }
              })
            : []
        })
        .flat()
    }
  }, [productList, handleBuyButtonClick])

  return (
    <>
      <Header {...headerConfig} />
      {productGridData ? (
        <ProductList
          listHeaders={productGridHeaders}
          listData={productGridData}
        />
      ) : null}
      {
        <Backdrop open={isLoadingProductList}>
          <CircularProgress
            color={'success'}
            size={'8rem'}
          />
        </Backdrop>
      }
    </>
  )
}

export default App
