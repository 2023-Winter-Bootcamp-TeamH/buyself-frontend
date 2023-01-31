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
        <Divisions IsShort />
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
  height: 30.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 5.5rem;
  background: #fff;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 85%;
    height: 23rem;
    margin: 0;
    padding-bottom: 1rem;
  }
  @media all and (max-width: 767px) {
    width: 85%;
    height: 22rem;
    margin-top: 0;
  }
`
