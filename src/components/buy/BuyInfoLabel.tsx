import React from 'react'
import styled from 'styled-components'
import TextBox from './TextBox'

/* 결제정보창에 텍스트 레이아웃 */

const BuyInfoLabel = ({ text, price }: { text: string; price: number }) => {
  return (
    <Label>
      <TextBox text={text} price={price} />
    </Label>
  )
}

export default BuyInfoLabel

const Label = styled.div`
  width: 100%;
  height: 3.938rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media all and (max-width: 767px) {
    height: 3rem;
  }
`
