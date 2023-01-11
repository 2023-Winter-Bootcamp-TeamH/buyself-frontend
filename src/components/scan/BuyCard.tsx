import React from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg, BsXLg } from 'react-icons/bs'

/* BuyCard - 스캔된 상품 카드 컴포넌트 */

const BuyCard = ({
  name,
  price,
  count,
}: {
  name: string
  price: string
  count: number
}) => {
  return (
    <StyledCard>
      <Cancel>
        <BsXLg size="20" />
      </Cancel>
      <ImageBox />
      <TextLarge>{name}</TextLarge>
      <TextSmall>{price}</TextSmall>
      <CountButton>
        <BsDashLg />
        {count}
        <BsPlusLg />
      </CountButton>
    </StyledCard>
  )
}

export default BuyCard

const StyledCard = styled.div`
  width: 15.313rem;
  height: 20.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-right: 1.5rem;
  border: 0.1rem solid #cfcfcf;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 11.313rem;
    height: 18.5rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 767px) {
    width: 13.25rem;
    height: 16.971rem;
    margin-bottom: 1.5rem;
  }
`

const Cancel = styled.label`
  width: 15.313rem;
  height: 1.5rem;
  display: flex;
  justify-content: flex-end;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 11.313rem;
  }
  @media all and (max-width: 767px) {
    width: 8.25rem;
  }
`

const ImageBox = styled.label`
  width: 6.438rem;
  height: 9.563rem;
  margin-bottom: 2rem;
  border: 1rem solid #000;
  @media all and (max-width: 767px) {
    width: 4.438rem;
    height: 7.563rem;
    margin-bottom: 0.5rem;
  }
`

const TextLarge = styled.div`
  font-size: 1.7rem;
  font-weight: 1000;
  @media all and (max-width: 767px) {
    font-size: 1.1rem;
  }
`
const TextSmall = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  @media all and (max-width: 767px) {
    font-size: 0.8rem;
  }
`

const CountButton = styled.button`
  width: 10rem;
  height: 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.15rem solid #000000;
  background-color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  @media all and (max-width: 767px) {
    width: 8rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`
