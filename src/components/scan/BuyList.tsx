import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState, store, toggleChecklist } from '../../store'
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
  const checklists = useSelector((state: RootState) => state.buyList.checklists)

  const setIsChecked = () => {
    products.map((v) => store.dispatch(toggleChecklist(v.id)))
  }

  useEffect(() => {
    setIsChecked()
  }, [products, checklists])

  return (
    <StyledList>
      <BuyCardBox onChange={setIsChecked}>
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
  width: 75%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.75rem 5rem 1.125rem 5rem;
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
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 78%;
    height: 18rem;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 1rem;
  }
  @media all and (max-width: 767px) {
    width: 73%;
    height: 18rem;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 1rem;
  }
`
const BuyCardBox = styled.div`
  width: 100%;
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
