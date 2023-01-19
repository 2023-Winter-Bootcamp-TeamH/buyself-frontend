import React from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import ProductCardList from '../components/products/ProductCardList'
import ProductSearch from '../components/products/productSearch'
import Candy from '../images/Candy.png'
import Chocolate from '../images/Chocolate.png'

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductPageLayout>
        <ImgCandy src={Candy} />
        <ImgChocolate src={Chocolate} />
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

const ImgCandy = styled.img`
  width: 10rem;
  position: fixed;
  top: 40rem;
  right: 0;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`

const ImgChocolate = styled.img`
  width: 9rem;
  position: fixed;
  top: 7rem;
  left: 0;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`
