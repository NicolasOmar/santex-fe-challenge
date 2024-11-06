import { useQuery } from '@apollo/client'
import { GET_PRODUCT_LIST } from '@graphql/queries'
import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import { ProductListResposne } from 'src/interfaces'
import './App.css'

const App = () => {
  const { data } = useQuery<ProductListResposne>(GET_PRODUCT_LIST)

  return (
    <>
      <Header></Header>
      {
        (data && data.products && data.products.items)
          ? <ProductList list={data.products.items} />
          : null
      }
    </>
  )
}

export default App
