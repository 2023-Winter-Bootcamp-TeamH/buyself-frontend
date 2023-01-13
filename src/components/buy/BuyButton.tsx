import React from 'react'
import styled from 'styled-components'

/* 결제하기 버튼 */

const BuyButton = ({ text, IsRed }: { text: string; IsRed?: boolean }) => {
  if (IsRed) {
    return <RedBtn>{text}</RedBtn>
  } else {
    return <Btn>{text}</Btn>
  }
}

const Btn = styled.button`
  height: 6.75rem;
  width: 25.375rem;
  background-color: #95dced;
  color: black;
  border-radius: 1rem;
  font-size: 2rem;
  box-shadow: 0.2rem 0.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #cae7ed;
  }
  @media all and (min-width: 768px) and (max-width: 1325px) {
    height: 5rem;
    width: 20rem;
    font-size: 1.7rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const RedBtn = styled(Btn)`
  background-color: #ff6060;
  color: white;
  box-shadow: 0.2rem 0.3rem black;
  &:hover {
    background-color: #ff9292;
  }
`

export default BuyButton