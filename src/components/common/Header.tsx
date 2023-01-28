import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/header_logo.svg'
import { FaChevronLeft } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import CheckList from '../checklist/CheckList'
import { RootState, store, totalCheckCount } from '../../store'
import { useSelector } from 'react-redux'

/**
 * 상단 헤더 컴포넌트
 * 로고, 뒤로가기 버튼, 장바구니 체크리스트 토글 버튼
 */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  const items = useSelector((state: RootState) => state.buyList.checklists)
  const totalCount = useSelector(
    (state: RootState) => state.buyList.checklistCount
  )

  useEffect(() => {
    store.dispatch(totalCheckCount(items.length))
  }, [items])

  const navigate = useNavigate()
  return (
    <>
      <Box>
        <Arrow
          onClick={() => {
            navigate(-1)
          }}
        >
          <FaChevronLeft />
        </Arrow>
        <Link to="/" style={{ marginTop: '1.5rem' }}>
          <Image src={logo} />
        </Link>
        <Cart>
          <GoChecklist
            onClick={() => {
              toggleMenu()
            }}
          ></GoChecklist>
          {totalCount > 0 && <ProductCount>{totalCount}</ProductCount>}
        </Cart>
      </Box>
      <CheckList isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 5rem;
  background: rgb(255, 255, 255);
  box-shadow: 0rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  @media all and (max-width: 767px) {
    height: 5rem;
  }
`
const Image = styled.img`
  display: flex;
  align-items: center;
  width: 10rem;
  @media all and (max-width: 767px) {
    width: 9rem;
    margin-top: 0.1rem;
  }
`

const Arrow = styled.label`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  margin-top: 0.2rem;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-size: 2.2rem;
  }
`

const Cart = styled.label`
  position: relative;
  display: block;
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  margin-top: 0.2rem;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-size: 2.5rem;
  }
`

const CountFade = keyframes`
0% {
  transform: scale(1);
}
20% {
  transform: scale(1.05);
}
40% {
  transform: scale(1.1);
}
`

const ProductCount = styled.span`
  position: absolute;
  top: 1rem;
  right: 0.8rem;
  z-index: 2;
  font-size: 0.8rem;
  border-radius: 50%;
  background: #d60b28;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  display: block;
  text-align: center;
  color: white;
  animation: ${CountFade} 3s 1s infinite linear alternate;
`
