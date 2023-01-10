import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../images/header_logo.svg'
import { FaChevronLeft } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  return (
    <Box>
      <Link to="/" style={{ color: 'black' }}>
        <Arrow>
          <FaChevronLeft />
        </Arrow>
      </Link>
      <Link to="/" style={{ marginTop: '1.5rem' }}>
        <Image src={logo} />
      </Link>
      <Link to="/" style={{ color: 'black' }}>
        <Cart>
          <AiOutlineShoppingCart />
        </Cart>
      </Link>
    </Box>
  )
}

export default Header

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 6.8rem;
  mask: radial-gradient(
        17.09px at 50% calc(100% - 23.8px),
        #000 99%,
        #0000 101%
      )
      calc(50% - 28px) 0/56px 100%,
    radial-gradient(17.09px at 50% calc(100% + 9.8px), #0000 99%, #000 101%) 50%
      calc(100% - 14px) / 56px 100% repeat-x;
  background: rgb(255, 255, 255);
  @media all and (max-width: 767px) {
    height: 6rem;
  }
`
const Image = styled.img`
  display: flex;
  align-items: center;
  width: 11.875rem;
  @media all and (max-width: 767px) {
    width: 9rem;
    margin-top: 0.1rem;
  }
`

const Arrow = styled.label`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-size: 2.2rem;
  }
`

const Cart = styled.label`
  display: flex;
  align-items: center;
  font-size: 2.8rem;
  margin-top: 1.5rem;
  cursor: pointer;
  @media all and (max-width: 767px) {
    font-size: 2.5rem;
    margin-top: 1.3rem;
  }
`
