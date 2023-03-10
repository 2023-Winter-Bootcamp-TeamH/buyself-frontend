import React from 'react'
import Header from '../components/common/Header'
import SearchCardList from '../components/search/SearchCardList'
import ProductSearch from '../components/products/productSearch'
import { useLocation } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

/**
 * 검색 결과 페이지
 */

const SearchPage = () => {
  const location = useLocation()
  const keyWord = location.state as string

  return (
    <>
      <SearchPageStyle />
      <Header />
      <SearchPageLayout>
        <Searchbar>
          <ProductSearch />
        </Searchbar>
        <SearchCardList keyWord={keyWord} />
      </SearchPageLayout>
    </>
  )
}

export default SearchPage

const SearchPageLayout = styled.div`
  height: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: space-evenly;
  padding: 0.5rem 8.129rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 4rem;
  }
  @media all and (max-width: 767px) {
    padding: 0 2rem;
  }
`
const Searchbar = styled.div`
  width: 104%;
  display: flex;
  justify-content: end;
  align-items: center;
  @media all and (min-width: 1024px) and (max-width: 1262px) {
    justify-content: center;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 107%;
    align-items: center;
    justify-content: center;
  }
  @media all and (min-width: 481px) and (max-width: 767px) {
    width: 107%;
  }
  @media all and (max-width: 480px) {
    width: 112%;
  }
`

const SearchPageStyle = createGlobalStyle`
  body {
    background-color: #ff9668;
  }
`
