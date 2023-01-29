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
  width: 25rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 4.5rem;
  background: #fff;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 85%;
    height: 25rem;
    margin-right: 0;
    margin-top: 1rem;
  }
  @media all and (max-width: 767px) {
    width: 83%;
    height: 24rem;
    margin: 0;
    margin-right: 1rem;
    margin-top: 1rem;
  }
`
