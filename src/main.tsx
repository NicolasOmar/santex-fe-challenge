import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import App from '@components/App/App'
import './index.css'

const API_URL = 'https://demo.vendure.io/shop-api/shop-api'

const commerceLink = createHttpLink({
  uri: API_URL,
  headers: {
    authorization: localStorage.getItem('Auth-Token')
      ? `Bearer ${localStorage.getItem('Auth-Token')}`
      : ''
  }
})

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext()
    const authHeader = context.response.headers.get('Vendure-Auth-Token')

    if (authHeader) {
      localStorage.setItem('Auth-Token', authHeader)
    }

    return response
  })
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([afterwareLink, commerceLink])
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
