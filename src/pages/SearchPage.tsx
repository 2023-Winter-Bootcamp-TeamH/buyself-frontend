import React from 'react'
import Header from '../components/common/Header'
import SearchCardList from '../components/search/SearchCardList'
import ProductSearch from '../components/products/productSearch'
import { useLocation } from 'react-router-dom'

/**
 * 검색 결과 페이지
 */

const SearchPage = () => {
  const location = useLocation()
  const keyWord = location.state as string

  return (
    <>
      <Header />
      <ProductSearch />
      <SearchCardList keyWord={keyWord} />
    </>
  )
}

export default SearchPage
