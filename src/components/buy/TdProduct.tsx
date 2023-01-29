import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg } from 'react-icons/bs'
import { decreaseProduct, increaseProduct, store } from '../../store'
import { BuyCardProps } from '../scan/BuyList'
import { Default } from '../scan/MediaQuery'

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
        <Default>
          <ImageBox>
            <Image src={img_url} />
          </ImageBox>
        </Default>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-right: 1px solid grey;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`
const PriceBox = styled(ProductBox)`
  width: 27.2%;
  justify-content: center;
  font-size: 1rem;
`
const ImageBox = styled.div`
  width: 40%
  height: 7rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 1rem;
  @media all and (max-width: 767px) {
    width: 30%;
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
  font-size: 1.2rem;
  @media all and (max-width: 1160px) {
    font-size: 1rem;
  }
`
const Image = styled.img`
  width: 6rem;
  @media all and (max-width: 1160px) {
    width: 3rem;
    margin-left: 0;
  }
`

const CountButton = styled.button`
  width: 8rem;
  height: 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid #000000;
  background-color: #fff;
  font-size: 1rem;
  @media all and (min-width: 768px) and (max-width: 1325px) {
    width: 8rem;
    height: 2.1rem;
  }
  @media all and (max-width: 767px) {
    width: 7.5rem;
    height: 1.8rem;
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
