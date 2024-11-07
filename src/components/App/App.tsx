import { useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_LIST } from '@graphql/queries'
import { ProductItem, ProductListResposne } from '@interfaces/graphql'
import { CircularProgress } from '@mui/material'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
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
    return productList?.products.items.map(_item => ({
      image: _item.featuredAsset?.source ?? '-',
      name: _item.name,
      description: _item.description,
      price: 0,
      action: <button onClick={() => handleBuyButtonClick(_item)}>Buy</button>
    }))
  }, [productList])

  const handleBuyButtonClick = (productToBuy: ProductItem) => {
    console.warn(productToBuy)
    setSubTotal(_oldValue => ++_oldValue)
  }

  return (
    <>
      <Header {...headerConfig} />
      {isLoadingProductList ? <CircularProgress /> : null}
      {productGridData ? (
        <ProductList
          listHeaders={productGridHeaders}
          listData={productGridData}
        />
      ) : null}
    </>
  )
}

export default App
