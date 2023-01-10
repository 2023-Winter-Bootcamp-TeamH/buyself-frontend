import React from 'react'
import styled from 'styled-components'
import ScanButton from './ScanButton'

const Layout = styled.div`
  display: flex;
  width: 80rem;
  height: 3rem;
  justify-content: flex-end;
`

const ButtonLayout = () => {
  return (
    <Layout>
      <ScanButton text="결제"></ScanButton>
      <ScanButton text="취소"></ScanButton>
    </Layout>
  )
}

export default ButtonLayout
