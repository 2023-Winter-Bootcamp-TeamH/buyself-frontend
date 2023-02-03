import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg, BsXLg } from 'react-icons/bs'
import {
  deleteChecklist,
  increaseChecklist,
  decreaseChecklist,
  store,
} from '../../store'
import { BuyCardProps } from '../scan/BuyList'

/**
 * 체크리스트 상품 카드
 * 상품 정보
 */

const CheckListCard = ({
  id,
  class_name,
  price,
  img_url,
  count,
}: BuyCardProps): React.ReactElement => {
  const [priceValue, setPrice] = useState(price)
  const [stringPrice, setStringPrice] = useState('')
  const comma = (price: number) => {
    const commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setStringPrice(commaPrice)
  }
  const onIncrease = () => {
    store.dispatch(increaseChecklist(id))
    setPrice(price * (count + 1))
  }
  const onDecrease = () => {
    if (count > 1) {
      store.dispatch(decreaseChecklist(id))
      setPrice(priceValue - price)
    }
  }
  useEffect(() => {
    setPrice(price * count)
    comma(price * count)
  }, [price, count])
  return (
    <CheckListCardLayout>
      <Image src={img_url} />
      <DetailContainer>
        <Title>{class_name}</Title>
        <Price>{stringPrice}원</Price>
        <QuantityBox>
          <Button onClick={onDecrease}>
            <BsDashLg size="15" />
          </Button>
          {count}
          <Button onClick={onIncrease}>
            <BsPlusLg size="15" />
          </Button>
        </QuantityBox>
      </DetailContainer>
      <Cancel onClick={() => store.dispatch(deleteChecklist(id))}>
        <BsXLg size="15" />
      </Cancel>
    </CheckListCardLayout>
  )
}

export default CheckListCard

const CheckListCardLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 83%;
  padding: 1rem;
  height: 8rem;
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #000;
  background-color: #fff;
  margin-bottom: 1rem;
`

const Image = styled.img`
  width: 8rem;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const QuantityBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.3rem;
  width: 8rem;
  border: 1.5px solid black;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;
  cursor: pointer;
`

const Price = styled.div`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.1rem;
`

const Cancel = styled.label`
  cursor: pointer;
`
