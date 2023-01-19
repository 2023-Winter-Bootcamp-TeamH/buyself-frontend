import { toNamespacedPath } from 'path'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BuyButton from '../components/buy/BuyButton'
import BuyInfoBox from '../components/buy/BuyInfoBox'
import LeftLayout from '../components/buy/LeftLayout'
import Header from '../components/common/Header'
import { RootState, store, totalPrice } from '../store'

/** 결제 페이지 */

const BuyPage = () => {
  const items = useSelector((state: RootState) => state.buyList.products)
  const total = useSelector((state: RootState) => state.buyList.productTotal)
  useEffect(() => {
    store.dispatch(
      totalPrice(
        items
          .map((item) => item.price * item.count)
          .reduce((acc, price) => acc + price, 0)
      )
    )
  }, [items])
  return (
    <>
      <Header />
      <BuyPageLayout>
        <LeftLayout />
        <BuyInfoBox price={total}>
          <ButtonLayout>
            <Link to="/pay">
              <BuyButton text="상품 결제하기" IsRed />
            </Link>
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
