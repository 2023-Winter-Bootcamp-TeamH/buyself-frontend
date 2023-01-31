import React from 'react'
import CheckListCard from './CheckListCard'
import styled from 'styled-components'
import { Division } from './Division'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

/**
 * 체크리스트 상품리스트
 * 담은 상품들 목록
 */

const CheckListItemList = () => {
  const checklists = useSelector((state: RootState) => state.buyList.checklists)

  return (
    <>
      <Division />
      <CheckListItemListLayout>
        {checklists &&
          checklists.map((v, index) => (
            <CheckListCard
              key={index}
              class_name={v.class_name}
              id={v.id}
              img_url={v.img_url}
              price={v.price}
              count={v.count}
            />
          ))}
      </CheckListItemListLayout>
      <Division />
    </>
  )
}

export default CheckListItemList

const CheckListItemListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40rem;
  padding: 1rem 0;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
  }
`
