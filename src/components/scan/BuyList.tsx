import React from 'react'
import styled from 'styled-components'
import BuyCard from './BuyCard'

/* 결제상품 리스트 컴포넌트 */

const StyledList = styled.div`
  width: 80rem;
  height: 22rem;
  margin: 6.375rem 13.375rem 1.125rem 13.313rem;
  padding: 1.75rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`
interface BuyCardProps {
  name: string
  price: string
}

const BuyList = ({ ItemList }: { ItemList: BuyCardProps }) => {
  return (
    <StyledList>
      {ItemList &&
        ItemList.map((v, index) => (
          <BuyCard key={index} name={v.name} price={v.price} />
        ))}
    </StyledList>
  )
}

export default BuyList
