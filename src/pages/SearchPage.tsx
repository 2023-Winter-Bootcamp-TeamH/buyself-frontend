import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import ProductCard from '../components/products/ProductCard'
import ProductSearch from '../components/products/productSearch'

/**
 * 검색 결과 페이지
 * 추후 api 연동 후 keword, pagination 추가 필요
 */

const SearchPage = () => {
  const [zero] = useState(false)
  return (
    <>
      <Header />
      <ProductSearch />
      {zero ? (
        <Zero>해당하는 상품을 찾을 수 없습니다.</Zero>
      ) : (
        <Common></Common>
      )}
    </>
  )
}

export default SearchPage

const Common = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding-bottom: 3rem;
  margin: 3rem auto;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const Zero = styled.div`
  display: flex;
  justify-content: center;
  font-family: Pretendard;
`
