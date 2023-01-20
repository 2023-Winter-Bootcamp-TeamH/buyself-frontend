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
    </Layout>
  )
}

export default ButtonLayout

const Layout = styled.div`
  width: 80%;
  display: flex;
  height: 3.125rem;
  justify-content: flex-end;
  @media all and (max-width: 767px) {
    width: 80vw;
    justify-content: center;
  }
`
