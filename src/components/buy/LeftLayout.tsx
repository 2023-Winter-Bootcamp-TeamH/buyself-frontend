import React from 'react'
import styled from 'styled-components'
import BuyTable from './BuyTable'
import { FaListAlt } from 'react-icons/fa'

/** 테이블표가 있는 왼쪽 레이아웃 */

const LeftLayout = () => {
  return (
    <Layout>
      <AllCheckLabel>
        <IconButton>
          <FaListAlt size="35" />
        </IconButton>
        <Label>담은 상품 목록</Label>
      </AllCheckLabel>
      <Line />
      <BuyTable />
    </Layout>
  )
}

export default LeftLayout

const Layout = styled.div`
  width: 55%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    width: 90%;
    height: 28rem;
    padding: 2rem 0;
    font-size: 1.3rem;
  }
  @media all and (max-width: 767px) {
    width: 90%;
    height: 28rem;
    padding: 2rem 0;
  }
`
const AllCheckLabel = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Label = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 1.5rem;
  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`
const Line = styled.div`
  width: 95%;
  border-bottom: 0.15rem solid black;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media all and (max-width: 767px) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`
const IconButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
`
