import React from 'react'
import styled from 'styled-components'
import Divisions from './Divisions'
import BuyTable from './BuyTable'
import BuyItem from '../scan/BuyItem'
import { FaCheckSquare } from 'react-icons/fa'

const LeftLayout = () => {
  return (
    <Layout>
      <AllCheckLabel>
        <FaCheckSquare size="40" />
        <Label>전체선택</Label>
      </AllCheckLabel>
      <Divisions IsShort />
      <BuyTable BuyItem={BuyItem} />
    </Layout>
  )
}

export default LeftLayout

const Layout = styled.div`
  width: 72.25rem;
  height: 50.438rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 5rem;
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
`
