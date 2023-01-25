import React from 'react'
import styled from 'styled-components'

/** 결제완료페이지 이동버튼
 * 메인으로
 * 상품 페이지로
 */

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
  box-shadow: 0.25rem 0.28rem black;
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  background: #95DCEB;
  border: 1px solid black;
  border-radius: 0.7rem;
  @media all and (max-width: 767px) {
    width: 8.5rem;
    height: 2.5rem;
    margin: 1.25rem 0.5rem 1.25rem 0.5rem;
    font-size: 1rem;
  }
  &:hover {
    background-color: #cae7ed;;
`

const RedBox = styled(Box)`
  background-color: #ff6060;
  &:hover {
    background-color: #ff9292;
  }
`
