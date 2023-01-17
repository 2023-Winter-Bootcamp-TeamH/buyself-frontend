import { toNamespacedPath } from 'path'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import BuyButton from '../components/buy/BuyButton'
import BuyInfoBox from '../components/buy/BuyInfoBox'
import LeftLayout from '../components/buy/LeftLayout'
import Header from '../components/common/Header'
import { RootState } from '../store'

/** 결제 페이지 */

const BuyPage = () => {
  const [total, setTotal] = useState(0)
  const items = useSelector((state: RootState) => state.buyList.products)
  useEffect(() => {
    setTotal(
      items
        .map((item) => item.price * item.count)
        .reduce((acc, price) => acc + price, 0)
    )
  }, [items])
  return (
    <>
      <Header />
      <BuyPageLayout>
        <LeftLayout />
        <BuyInfoBox price={total}>
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
  justify-content: center;
  padding: 0 0 4rem 0;
  @media all and (max-width: 1160px) {
    flex-direction: column;
  }
`
const ButtonLayout = styled.div`
  width: 100%;
  height: 30%;
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
