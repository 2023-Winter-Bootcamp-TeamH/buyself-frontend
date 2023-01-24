import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Default } from './MediaQuery'
import ScanButton from './ScanButton'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { check } from 'prettier'

export interface ChecklistProps {
  class_name: string
  id: number
  img_url: string
  price: number
  count: number
  checked: boolean
}

const ChecklistBox = () => {
  const checklists = useSelector((state: RootState) => state.buyList.checklists)

  return (
    <ChecklistBoxLayout>
      <ListLayout>
        {checklists &&
          checklists.map((v, index) => (
            <ItemLayout key={index}>
              <CheckBox type="checkbox" />
              <TextBox id={v.class_name}>{v.class_name}</TextBox>
            </ItemLayout>
          ))}
      </ListLayout>
      <Default>
        <ScanButton text="결제하기" />
      </Default>
    </ChecklistBoxLayout>
  )
}

export default ChecklistBox

const ChecklistBoxLayout = styled.div`
  width: 74%;
  height: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.6rem;
    background: #ff9668;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
  }
  @media all and (min-width: 1024px) and (max-width: 1221px) {
    width: 85%;
  }
  @media all and (max-width: 1023px) {
    width: 85%;
    height: 8rem;
    border-radius: 1rem;
    margin 2rem 0 0.5rem 0;
  }
`
const ListLayout = styled.div`
  width: 100%;
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`
const ItemLayout = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  padding-left: 2rem;
`

const CheckBox = styled.input`
  appearance: none;
  border: 0.15rem solid gray;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;

  &:checked {
    appearance: none;
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: gray;
  }
`
const TextBox = styled.div`
  width: 60%;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
`
const CheckedText = styled(TextBox)`
  text-decoration: line-through;
`
