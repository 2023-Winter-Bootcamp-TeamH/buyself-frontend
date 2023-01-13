import React from 'react'
import styled from 'styled-components'
import { HiTrash } from 'react-icons/hi'
import { FaCheckSquare } from 'react-icons/fa'
import TdProduct from './TdProduct'

/** 결제창 테이블표 */

interface Props {
  name: string
  price: string
  count: number
}

const BuyTable = ({ BuyItem }: { BuyItem: Props[] }) => {
  return (
    <TableBox>
      <Table>
        <Thead>
          <TrCheck>
            <IconButton>
              <FaCheckSquare size="35" />
            </IconButton>
          </TrCheck>
          <TrProduct>구매정보</TrProduct>
          <Tr>가격</Tr>
          <Tr>할인정보</Tr>
          <Tr>선택</Tr>
        </Thead>
        {BuyItem &&
          BuyItem.map((v, index) => (
            <Tbody key={index}>
              <TdCheck>
                <IconButton>
                  <FaCheckSquare size="35" />
                </IconButton>
              </TdCheck>
              <TdProduct name={v.name} price={v.price} count={v.count} />
              <Td>{v.price}</Td>
              <Td>X</Td>
              <Td>
                <IconButton>
                  <HiTrash size="35" />
                </IconButton>
              </Td>
            </Tbody>
          ))}
      </Table>
    </TableBox>
  )
}

export default BuyTable

const TableBox = styled.div`
  width: 100%;
  height: 40rem;
  background: white;
  border-left: 0.16rem solid;
  border-right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
    background: #ff9668;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
  }
  @media all and (min-width: 1140px) and (max-width: 1325px) {
    font-size: 1.3rem;
  }
  @media all and (max-width: 767px) {
    height: 25rem;
  }
`

const Table = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  background: white;
  border: 0.16rem solid;
  border-left: 0;
  border-right: 0;
`

const Thead = styled(Table)`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 0.16rem solid;
  font-size: 1.6rem;
  font-weight: bold;
  white-space: pre-wrap;
  @media all and (min-width: 768px) and (max-width: 1325px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
  }
`

const Tbody = styled(Thead)`
  height: 12rem;
  @media all and (max-width: 767px) {
    height: 10rem;
  }
`
const TrCheck = styled(Thead)`
  width: 10%;
  border-right: 0.16rem solid;
  border-bottom: 0;
`
const TrProduct = styled(TrCheck)`
  width: 39%;
`
const Tr = styled(TrCheck)`
  width: 17%;
`
const TdCheck = styled(TrCheck)`
  height: 12rem;
  @media all and (max-width: 767px) {
    height: 10rem;
  }
`
const Td = styled(Tr)`
  height: 12rem;
  @media all and (max-width: 767px) {
    height: 10rem;
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
