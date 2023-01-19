import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg, BsXLg } from 'react-icons/bs'
import image from '../../images/test_image.png'
import { BuyCardProps } from './BuyList'
import {
  decreaseProduct,
  deleteProduct,
  increaseProduct,
  store,
} from '../../store'

/* BuyCard - 스캔된 상품 카드 컴포넌트 */

const BuyCard = ({
  id,
  class_name,
  price,
  img_url,
  count,
}: BuyCardProps): React.ReactElement => {
  const [priceValue, setPrice] = useState(price)
  const onIncrease = () => {
    store.dispatch(increaseProduct(id))
    setPrice(price * (count + 1))
  }
  const onDecrease = () => {
    if (count > 1) {
      store.dispatch(decreaseProduct(id))
      setPrice(priceValue - price)
    }
  }
  useEffect(() => {
    setPrice(price * count)
  }, [price, count])
  return (
    <StyledCard>
      <Cancel onClick={() => store.dispatch(deleteProduct(id))}>
        <IconButton>
          <BsXLg size="20" />
        </IconButton>
      </Cancel>
      <ImgBlock>
        <Image src={img_url} />
      </ImgBlock>
      <TextLarge>{class_name}</TextLarge>
      <TextSmall>{priceValue}원</TextSmall>
      <CountButton>
        <IconButton onClick={onDecrease}>
          <BsDashLg />
        </IconButton>
        {count}
        <IconButton onClick={onIncrease}>
          <BsPlusLg />
        </IconButton>
      </CountButton>
    </StyledCard>
  )
}

export default BuyCard

const StyledCard = styled.div`
  width: 11rem;
  height: 16rem;
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
    width: 11rem;
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
  margin-left: 9rem;
  height: 1.5rem;
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 8rem;
  }
  @media all and (max-width: 767px) {
    margin-left: 10rem;
  }
`
const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  margin-bottom: 2rem;
`

const Image = styled.img`
  width: 6rem;
  @media all and (max-width: 767px) {
    width: 5rem;
    margin-bottom: 0.5rem;
  }
`

const TextLarge = styled.div`
  font-size: 1.2rem;
  font-weight: 1000;
  @media all and (min-width: 768px) and (max-width: 1325px) {
    font-size: 1rem;
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
