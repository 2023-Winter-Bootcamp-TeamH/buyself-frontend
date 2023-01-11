import React from 'react'
import styled from 'styled-components'
import BuyCard from './BuyCard'
/* 결제상품 리스트 컴포넌트 */

interface BuyCardProps {
  name: string
  price: string
  count: number
}

const BuyList = ({ ItemList }: { ItemList: BuyCardProps[] }) => {
  return (
    <StyledList>
      <BuyCardBox>
        {ItemList &&
          ItemList.map((v, index) => (
            <BuyCard
              key={index}
              name={v.name}
              price={v.price}
              count={v.count}
            />
          ))}
      </BuyCardBox>
    </StyledList>
  )
}

export default BuyList

const StyledList = styled.div`
  width: 80vw;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.375rem 13.375rem 1.125rem 13.313rem;
  padding: 1.75rem 1.75rem 0 1.75rem;
  border-radius: 1.5rem 1.5rem 1rem 1rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  
  overflow: auto;
  ::-webkit-scrollbar {
    width: 80vw;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: #eeeeee;
    border-radius: 20rem;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20rem;
  }

  @media all and (max-width: 767px) {
    height: 45rem;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0.8rem;
      height: 25rem;
    }
    }
  }
`
const BuyCardBox = styled.div`
  width: 80vw;
  height: 22.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
