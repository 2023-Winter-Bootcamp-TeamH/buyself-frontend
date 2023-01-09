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
        <Image src={logo} width="190px" />
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
`
const Image = styled.img`
  display: flex;
  align-items: center;
`

const Arrow = styled.label`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
`

const Cart = styled.label`
  display: flex;
  align-items: center;
  font-size: 2.8rem;
  margin-top: 1.5rem;
  cursor: pointer;
`
