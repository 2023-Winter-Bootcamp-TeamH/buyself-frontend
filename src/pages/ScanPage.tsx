import React from 'react'
import Header from '../components/common/Header'
import styled from 'styled-components'
import ButtonLayout from '../components/scan/ButtonLayout'
import Scanner from '../components/scan/Scanner'
import BuyList from '../components/scan/BuyList'
import ItemList from '../components/scan/ItemList'

/* 상품인식페이지 */

const ScanPage = () => {
  return (
    <>
      <Header />
      <ScanPageLayout>
        <Scanner />
        <BuyList ItemList={ItemList} />
        <ButtonLayout />
      </ScanPageLayout>
    </>
  )
}

export default ScanPage

const ScanPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: space-evenly;
  width: 100vw;
  height: 100vh;
  border-bottom: 1rem solid #fff;
`
