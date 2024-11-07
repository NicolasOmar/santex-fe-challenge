interface ProductBase {
  id: string
  name: string
  featuredAsset: {
    source: string
  } | null
}

export interface ProductItemVariant extends ProductBase {
  sku: string
  price: number
  priceWithTax: number
}

export interface ProductItem extends ProductBase {
  description: string
  variants: ProductItemVariant[]
}

export interface ProductListResposne {
  products: {
    items: ProductItem[]
  }
}
