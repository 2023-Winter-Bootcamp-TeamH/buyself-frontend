import React from 'react'
import styled from 'styled-components'
import BuyButton from '../components/buy/BuyButton'
import BuyInfoBox from '../components/buy/BuyInfoBox'
import LeftLayout from '../components/buy/LeftLayout'
import Header from '../components/common/Header'

/** 결제 페이지 */

const BuyPage = () => {
  return (
    <>
      <Header />
      <BuyPageLayout>
        <LeftLayout />
        <BuyInfoBox>
          <ButtonLayout>
            <BuyButton text="전체 상품 주문하기" IsRed />
            <BuyButton text="선택 상품 주문하기" />
          </ButtonLayout>
        </BuyInfoBox>
      </BuyPageLayout>
    </>
  )
}

export default BuyPage

const BuyPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media all and (max-width: 1160px) {
    flex-direction: column;
  }
`
const ButtonLayout = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    flex-direction: row;
  }
  @media all and (max-width: 767px) {
    height: 11rem;
  }
`