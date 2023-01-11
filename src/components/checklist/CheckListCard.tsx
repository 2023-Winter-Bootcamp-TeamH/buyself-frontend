import React, { useState } from 'react'
import styled from 'styled-components'
import image from '../../images/test_image.png'
import { BsPlusLg, BsDashLg } from 'react-icons/bs'

/**
 * 체크리스트 상품 카드
 * 상품 정보
 */

const CheckListCard = ({ title, price }: { title: string; price: number }) => {
  const [quantity, setQuantity] = useState(1)
  const [priceValue, setPrice] = useState(price)
  const handleClickSub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setPrice(priceValue - price)
    }
  }
  const handleClickAdd = () => {
    setPrice(price * (quantity + 1))
    setQuantity(quantity + 1)
  }
  return (
    <CheckListCardLayout>
      <Image src={image} />
      <DetailContainer>
        <Title>{title}</Title>
        <Price>{priceValue}원</Price>
        <QuantityBox>
          <Button
            onClick={() => {
              handleClickSub()
            }}
          >
            <BsDashLg />
          </Button>
          {quantity}
          <Button
            onClick={() => {
              handleClickAdd()
            }}
          >
            <BsPlusLg />
          </Button>
        </QuantityBox>
      </DetailContainer>
    </CheckListCardLayout>
  )
}

export default CheckListCard

const CheckListCardLayout = styled.div`
  display: flex;
  width: 90%;
  height: 10rem;
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #000;
  background-color: #fff;
  margin-bottom: 1rem;
`

const Image = styled.img`
  width: 8rem;
  margin: 1rem;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: 1rem;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const QuantityBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  width: 10rem;
  border: 2px solid black;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;
  cursor: pointer;
`

const Price = styled.div`
  margin-top: 2rem;
  font-weight: 500;
  font-size: 1.2rem;
`
