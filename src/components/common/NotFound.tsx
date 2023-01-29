import React from 'react'
import Header from './Header'
import styled, { createGlobalStyle } from 'styled-components'

const NotFound = () => {
  return (
    <div>
      <NotFoundPageStyle />
      <Header />
      <Text>404: 페이지를 찾을 수 없습니다.</Text>
    </div>
  )
}

export default NotFound

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  font-size: 1.5rem;
`

const NotFoundPageStyle = createGlobalStyle`
  body {
    background-color: #ff9668;
  }
`
