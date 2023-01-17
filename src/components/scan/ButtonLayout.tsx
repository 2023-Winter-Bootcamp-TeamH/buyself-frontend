import React from 'react'
import styled from 'styled-components'
import ScanButton from './ScanButton'
import { Link } from 'react-router-dom'

/* 하단부 결제버튼, 취소버튼 담는 레이아웃 */

const ButtonLayout = () => {
  return (
    <Layout>
      <Link to="/buy">
        <ScanButton text="결제"></ScanButton>
      </Link>
      <Link to="/">
        <ScanButton text="취소"></ScanButton>
      </Link>
    </Layout>
  )
}

export default ButtonLayout

const Layout = styled.div`
  display: flex;
  width: 80vw;
  height: 3.125rem;
  justify-content: flex-end;
  margin: 2rem 0 2rem 5rem;
  @media all and (max-width: 767px) {
    width: 80vw;
    justify-content: center;
    margin: 1.5rem 0 2rem;
  }
`
