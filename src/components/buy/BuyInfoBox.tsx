import React from 'react'
import styled from 'styled-components'
import BuyInfoLabel from './BuyInfoLabel'
import Divisions from './Divisions'

/* 오른쪽 결제 정보창 */

const BuyInfoBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Box>
        <BuyInfoLabel text="총 주문금액" price="-----원" />
        <Divisions />
        <BuyInfoLabel text="할인금액" price="-----원" />
        <BuyInfoLabel text="할인금액" price="-----원" />
        <Divisions IsShort />
        <BuyInfoLabel text="최종 결제 금액" price="-----원" />
        {children}
      </Box>
    </>
  )
}

export default BuyInfoBox

const Box = styled.div`
  width: 32.875rem;
  height: 45.438rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 0.15rem solid;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
`
