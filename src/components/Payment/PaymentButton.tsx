import React from 'react'
import styled from 'styled-components'

const PaymentButton = ({
  title,
  IsRed,
}: {
  title: string
  IsRed?: boolean
}) => {
  if (IsRed) {
    return <RedBox>{title}</RedBox>
  } else {
    return <Box>{title}</Box>
  }
}
export default PaymentButton

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 3rem;
  margin: 1.25rem 1.5rem 1.25rem 1.5rem;
  border-radius: 0.7rem;
  box-shadow: 0.3rem 0.3rem black;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  background: #95DCEB;
  border-top: 1px solid black;
  border-left: 1px solid black;
  @media all and (max-width: 767px) {
    width: 9rem;
    height: 2rem;
    margin: 0;
    margin: 1.25rem 0.5rem 1.25rem 0.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: #C9CACA;
`

const RedBox = styled(Box)`
  background-color: #ff6060;
  &:hover {
    background-color: #ff9292;
  }
`
