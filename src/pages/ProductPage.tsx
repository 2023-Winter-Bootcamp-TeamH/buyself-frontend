import React from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import ProductList from '../components/products/ProductList'
import ProductCardList from '../components/products/ProductCardList'
import ProductSearch from '../components/products/productSearch'
import Candy from '../images/Candy.png'
import Chocolate from '../images/Chocolate.png'

const ProductPage = () => {
  return (
    <>
      <ImgCandy src={Candy} />
      <ImgChocolate src={Chocolate} />
      <Header />
      <ProductSearch />

      <ProductCardList ProductList={ProductList} />
    </>
  )
}

export default ProductPage

const ImgCandy = styled.img`
  width: 10rem;
  position: fixed;
  bottom: 0.1rem;
  left: 87rem;
`

const ImgChocolate = styled.img`
  width: 15rem;
  position: fixed;
  bottom: 20rem;
  right: 87rem;
`
