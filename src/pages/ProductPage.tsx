import React from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import ProductCardList from '../components/products/ProductCardList'
import ProductSearch from '../components/products/productSearch'

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductPageLayout>
        <ProductSearch />
        <ProductCardList />
      </ProductPageLayout>
    </>
  )
}

export default ProductPage

const ProductPageLayout = styled.div`
  position: relative;
  height: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: space-evenly;
  padding: 0.5rem 8rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 4rem;
  }
  @media all and (max-width: 767px) {
    padding: 0 2rem;
  }
`
