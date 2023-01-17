import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../../store'
import BuyCard from './BuyCard'
/* 결제상품 리스트 컴포넌트 */

export interface BuyCardProps {
  id: number
  class_name: string
  price: number
  img_url: string
  count: number
}

const BuyList = () => {
  const products = useSelector((state: RootState) => state.buyList.products)

  return (
    <StyledList>
      <BuyCardBox>
        {products &&
          products.map((value, i) => (
            <BuyCard
              id={value.id}
              key={i}
              class_name={value.class_name}
              price={value.price}
              img_url={value.img_url}
              count={value.count}
            />
          ))}
      </BuyCardBox>
    </StyledList>
  )
}

export default BuyList

const StyledList = styled.div`
  width: 80vw;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.375rem 13.375rem 1.125rem 14rem;
  padding: 1.75rem 1.75rem 0 1.75rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 10rem;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
  }
  @media all and (max-width: 767px) {
    height: 30rem;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0;
  }
`
const BuyCardBox = styled.div`
  width: 80vw;
  height: 22.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media all and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
  }
`
