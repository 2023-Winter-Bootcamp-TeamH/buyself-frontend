import React from 'react'
import CheckListCard from './CheckListCard'
import styled from 'styled-components'
import { Division } from './Division'

/**
 * 체크리스트 상품리스트
 * 담은 상품들 목록
 */

const CheckListItemList = () => {
  return (
    <>
      <Division />
      <CheckListItemListLayout>
        <CheckListCard title="롯데제과 월드콘 XQ" price={3000} />
        <CheckListCard title="롯데제과 월드콘 XQ" price={2000} />
        <CheckListCard title="롯데제과 월드콘 XQ" price={4000} />
        <CheckListCard title="롯데제과 월드콘 XQ" price={5000} />
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
  padding: 1rem 0;
`
