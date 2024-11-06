export interface ProductItem {
  id: string
  name: string
  featuredAsset: {
    source: string
  }
}

export interface ProductListResposne {
  products: {
    items: ProductItem[]
  }
}