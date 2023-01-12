import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'

interface ProductCardProps {
  title: string
  price: string
}

const ProductCardList = ({
  ProductList,
}: {
  ProductList: ProductCardProps[]
}) => {
  return (
    <Div>
      {ProductList &&
        ProductList.map((v, index) => (
          <ProductCard key={index} title={v.title} price={v.price} />
        ))}
    </Div>
  )
}

export default ProductCardList

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`
