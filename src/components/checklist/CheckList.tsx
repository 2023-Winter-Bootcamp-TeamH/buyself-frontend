import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../images/checklist_logo.svg'
import Footer from './Footer'
import CheckListItemList from './CheckListItemList'
import { RootState, store, totalCheckPrice, totalPrice } from '../../store'
/**
 * 체크리스트 토글 메뉴
 * 상단 헤더, 상품리스트, 하단 결제창
 */

const CheckList = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: any
}) => {
  const toggleMenu = () => {
    setIsOpen(false)
  }
  const items = useSelector((state: RootState) => state.buyList.checklists)
  const total = useSelector((state: RootState) => state.buyList.checklistTotal)
  useEffect(() => {
    store.dispatch(
      totalCheckPrice(
        items
          .map((item) => item.price * item.count)
          .reduce((acc, price) => acc + price, 0)
      )
    )
  }, [items])
  return (
    <CheckListLayout className={isOpen ? 'open' : ''}>
      <Header>
        <Logo src={logo} />
        <Close
          onClick={() => {
            toggleMenu()
          }}
        >
          <AiOutlineClose />
        </Close>
      </Header>
      <CheckListItemList />
      <Footer price={total} />
      <Skeleton />
    </CheckListLayout>
  )
}

export default CheckList

const CheckListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10rem;
  height: 53rem;
  padding: 12px;
  background-color: white;
  z-index: 5;
  width: 36%;
  right: -55%;
  top: 0;
  position: fixed;
  box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.25);
  transition: 0.5s ease;
  &.open {
    position: fixed;
    right: 0;
    transition: 0.3s ease;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    right: -130%;
    padding: 0;
  }
`

const Close = styled.label`
  font-size: 2.5rem;
  margin-top: 0.8rem;
  cursor: pointer;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 14rem;
  margin-top: 0.8rem;
  margin-left: 1rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media all and (max-width: 767px) {
    width: 12rem;
    margin-left: 2rem;
  }
`

const Skeleton = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  bottom: 0;
  width: 272px;
  z-index: -10000;
  bakcground-color: white;
`
