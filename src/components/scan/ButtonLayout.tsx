import React from 'react'
import styled from 'styled-components'
import ScanButton from './ScanButton'

/* 하단부 결제버튼, 취소버튼 담는 레이아웃 */

const ButtonLayout = () => {
  return (
    <Layout>
      <ScanButton text="결제"></ScanButton>
      <ScanButton text="취소"></ScanButton>
    </Layout>
  )
}

export default ButtonLayout

const Layout = styled.div`
  display: flex;
  width: 80vw;
  height: 3.125rem;
  justify-content: flex-end;
  @media all and (max-width: 767px) {
    justify-content: center;
  }
`
