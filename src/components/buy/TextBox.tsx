import React from 'react'
import styled from 'styled-components'

/** 결제정보창 텍스트 (총주문금액 / ---원) */

const TextBox = ({ text, price }: { text: string; price: number }) => {
  return (
    <>
      <Text>{text}</Text>
      <Price>₩{price}</Price>
    </>
  )
}

export default TextBox

const Text = styled.div`
  width: 10rem;
  height: 3.938rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 0;
  margin-left: 1rem;
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
  }
`
const Price = styled(Text)`
  justify-content: flex-end;
  margin-right: 1rem;
  margin-left: 0;
`
