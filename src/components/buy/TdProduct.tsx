import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg } from 'react-icons/bs'
import { decreaseProduct, increaseProduct, store } from '../../store'
import { BuyCardProps } from '../scan/BuyList'

/** 테이블표 중 구매정보 컴포넌트 */

const TdProduct = ({
  id,
  img_url,
  class_name,
  price,
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
    <>
      <ProductBox>
        <ImageBox>
          <Image src={img_url} />
        </ImageBox>
        <RightBox>
          {class_name}
          <CountButton>
            <IconButton onClick={onDecrease}>
              <BsDashLg />
            </IconButton>
            {count}
            <IconButton onClick={onIncrease}>
              <BsPlusLg />
            </IconButton>
          </CountButton>
        </RightBox>
      </ProductBox>
      <PriceBox>{priceValue}</PriceBox>
    </>
  )
}

export default TdProduct

const ProductBox = styled.div`
  width: 76.56%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-right: 0.16rem solid;
  border-bottom: 0;
  @media all and (min-width: 768px) and (max-width: 1325px) {
    width: 77%;
    font-size: 1.3rem;
  }
  @media all and (max-width: 767px) {
    width: 78%;
    font-size: 1.2rem;
    flex-direction: column;
  }
`
const PriceBox = styled(ProductBox)`
  width: 33.44%;
  justify-content: center;
`
const ImageBox = styled.div`
  width: 30%
  height: 8rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  @media all and (max-width: 767px) {
    width: 5rem;
    margin-left: 0;
  }
`
const RightBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
  }
`
const Image = styled.img`
  width: 5rem;
  @media all and (max-width: 767px) {
    margin-left: 0;
  }
`

const CountButton = styled.button`
  width: 10rem;
  height: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.15rem solid #000000;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  @media all and (min-width: 768px) and (max-width: 1325px) {
    width: 8rem;
    height: 2.3rem;
    font-size: 1.2rem;
  }
  @media all and (max-width: 767px) {
    width: 7.5rem;
    height: 2.2rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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
