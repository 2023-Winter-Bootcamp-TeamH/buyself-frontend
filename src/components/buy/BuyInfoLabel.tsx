import React from 'react'
import styled from 'styled-components'
import TextBox from './TextBox'

const BuyInfoLabel = ({ text, price }: { text: string; price: string }) => {
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
  font-size: 1.5rem;
  font-weight: bold;
`
