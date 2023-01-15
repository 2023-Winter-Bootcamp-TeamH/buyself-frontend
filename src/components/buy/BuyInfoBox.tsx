import React from 'react'
import styled from 'styled-components'
import BuyInfoLabel from './BuyInfoLabel'
import Divisions from './Divisions'

/* 오른쪽 결제 정보창 */

const BuyInfoBox = ({
  children,
  price,
}: {
  children?: React.ReactNode
  price: number
}) => {
  return (
    <>
      <Box>
        <BuyInfoLabel text="총 주문금액" price={price} />
        <Divisions />
        <BuyInfoLabel text="원가" price={price} />
        <BuyInfoLabel text="할인금액" price={0} />
        <Divisions IsShort />
        <BuyInfoLabel text="최종 결제 금액" price={price} />
        {children}
      </Box>
    </>
  )
}

export default BuyInfoBox

const Box = styled.div`
  width: 30.875rem;
  height: 45.438rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 0.15rem solid;
  border-radius: 1rem;
  margin-right: 2rem;
  background: #fff;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 85%;
    height: 25rem;
    margin-right: 0;
  }
  @media all and (max-width: 767px) {
    width: 85%;
    height: 24rem;
    margin: 0;
    margin-right: 1rem;
    padding 2rem 0;
  }
`
