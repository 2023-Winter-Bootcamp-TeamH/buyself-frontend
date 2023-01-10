import React from 'react'
import styled from 'styled-components'

/* BuyCard - 스캔된 상품 카드 컴포넌트 */

const StyledCard = styled.div`
  width: 14.313rem;
  height: 18.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border: 0.1rem;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 0.1rem 0.4rem rgba(0, 0, 0, 0.25);
`

const BuyCard = ({ name, price }: { name: string; price: string }) => {
  return (
    <StyledCard>
      <h4>{name}</h4>
      <h6>{price}</h6>
    </StyledCard>
  )
}

export default BuyCard
