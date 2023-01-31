import React from 'react'
import styled from 'styled-components'
import BuyTable from './BuyTable'
import { FaListAlt } from 'react-icons/fa'
import './LeftLayout.css'

/** 테이블표가 있는 왼쪽 레이아웃 */

const LeftLayout = () => {
  return (
    <Layout>
      <ShoppingCart>
        <IconButton>
          <FaListAlt size="35" />
        </IconButton>
        <Label className="FontText">Shopping cart</Label>
      </ShoppingCart>
      <BuyTable />
    </Layout>
  )
}

export default LeftLayout

const Layout = styled.div`
  width: 62%;
  height: 36.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    justify-content: flex-start;
    width: 90%;
    height: 25rem;
    padding: 2rem 0;
    font-size: 1.3rem;
    margin-bottom: 0;
  }
  @media all and (max-width: 767px) {
    justify-content: flex-start;
    width: 90%;
    margin-top: 1rem;
    height: 25rem;
  }
`
const ShoppingCart = styled.div`
  width: 90%;
  display: flex;
  margin: 2.5rem 0 1.5rem 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media all and (max-width: 1150px) {
    margin-top: 0;
  }
`
const Label = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 1rem;
  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`
const IconButton = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
`
