import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_LIST } from '@graphql/queries'
import { ProductListResposne } from '@interfaces/graphql'
import { CircularProgress } from '@mui/material'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import './App.css'

const App = () => {
  const { data: productList, loading: isLoadingProductList } =
    useQuery<ProductListResposne>(GET_PRODUCT_LIST)

  const gridHeaders = ['Image', 'Name', 'Description', 'Price']
  const parsedList = useMemo(() => {
    return productList?.products.items.map(_item => ({
      image: _item.featuredAsset?.source ?? '-',
      name: _item.name,
      description: '-',
      price: 0
    }))
  }, [productList])

  const headerConfig = {
    logoSrc:
      'https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png',
    subTotalAmount: 0
  }

  return (
    <>
      <Header {...headerConfig} />
      {isLoadingProductList ? <CircularProgress /> : null}
      {parsedList ? (
        <ProductList
          headerList={gridHeaders}
          list={parsedList}
        />
      ) : null}
    </>
  )
}

export default App
