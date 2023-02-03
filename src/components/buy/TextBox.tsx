import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

/** 결제정보창 텍스트 (총주문금액 / ---원) */

const TextBox = ({ text, price }: { text: string; price: number }) => {
  const [stringPrice, setStringPrice] = useState('')
  const comma = (price: number) => {
    const commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setStringPrice(commaPrice)
  }
  useEffect(() => {
    comma(price)
  }, [])
  useEffect(() => {
    comma(price)
  }, [price])
  return (
    <>
      <Text>{text}</Text>
      <Price>₩{stringPrice}</Price>
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
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 0;
  margin-left: 1.5rem;
  @media all and (min-width: 767px) and (max-width: 1150px) {
    margin-left: 2.5rem;
  }
`
const Price = styled(Text)`
  justify-content: flex-end;
  margin-right: 1.5rem;
  margin-left: 0;
  @media all and (min-width: 767px) and (max-width: 1150px) {
    margin-right: 2.5rem;
  }
`
