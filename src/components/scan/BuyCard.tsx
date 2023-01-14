import React, { useState } from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg, BsXLg } from 'react-icons/bs'
import image from '../../images/test_image.png'

/* BuyCard - 스캔된 상품 카드 컴포넌트 */

const BuyCard = ({
  name,
  price,
  count,
}: {
  name: string
  price: number
  count: number
}) => {
  const [number, setNumber] = useState(count)
  const onIncrease = () => {
    setNumber(number + 1)
  }
  const onDecrease = () => {
    number !== 0 && setNumber(number - 1)
  }
  return (
    <StyledCard>
      <Cancel>
        <IconButton>
          <BsXLg size="20" />
        </IconButton>
      </Cancel>
      <Image src={image} />
      <TextLarge>{name}</TextLarge>
      <TextSmall>{price}원</TextSmall>
      <CountButton>
        <IconButton onClick={onDecrease}>
          <BsDashLg />
        </IconButton>
        {number}
        <IconButton onClick={onIncrease}>
          <BsPlusLg />
        </IconButton>
      </CountButton>
    </StyledCard>
  )
}

export default BuyCard

const StyledCard = styled.div`
  width: 10rem;
  height: 15rem;
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
    width: 10rem;
    height: 15rem;
    margin-bottom: 1rem;
  }
  @media all and (max-width: 767px) {
    width: 12rem;
    height: 16.971rem;
    margin-bottom: 1.5rem;
  }
`

const Cancel = styled.label`
  width: 15.313rem;
  height: 1.5rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 11.313rem;
    margin-right: 1.5rem;
  }
  @media all and (max-width: 767px) {
    margin-right: 3.5rem;
  }
`

const Image = styled.img`
  width: 4rem;
  height: 7rem;
  margin-bottom: 2rem;
  @media all and (max-width: 767px) {
    width: 4.438rem;
    height: 7.563rem;
    margin-bottom: 0.5rem;
  }
`

const TextLarge = styled.div`
  font-size: 1.3rem;
  font-weight: 1000;
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
  }
`
const TextSmall = styled.div`
  font-size: 1rem;
  font-weight: 700;
  @media all and (max-width: 767px) {
    font-size: 1rem;
  }
`

const CountButton = styled.button`
  width: 8rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.15rem solid #000000;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`

const IconButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
`
