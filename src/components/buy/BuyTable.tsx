import React from 'react'
import styled from 'styled-components'
import { HiTrash } from 'react-icons/hi'
import { FaCheckSquare } from 'react-icons/fa'
import TdProduct from './TdProduct'

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
            <FaCheckSquare size="40" />
          </TrCheck>
          <TrProduct>상품/옵션정보</TrProduct>
          <Tr>구매예정금액</Tr>
          <Tr>행사/할인</Tr>
          <Tr>선택</Tr>
        </Thead>
        {BuyItem &&
          BuyItem.map((v, index) => (
            <Tbody key={index}>
              <TdCheck>
                <FaCheckSquare size="40" />
              </TdCheck>
              <TdProduct name={v.name} price={v.price} count={v.count} />
              <Td>{v.price}</Td>
              <Td>X</Td>
              <Td>
                <HiTrash size="40" />
              </Td>
            </Tbody>
          ))}
      </Table>
    </TableBox>
  )
}

export default BuyTable

const TableBox = styled.div`
  width: 71rem;
  height: 40rem;
  background: white;
  border-left: 0.15rem solid;
  border-right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
    background: #ff9668;
    border-left: 0.15rem solid;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
  }
`

const Table = styled.div`
  width: 71rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  background: white;
  border: 0.15rem solid;
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
  border-bottom: 0.15rem solid;
  font-size: 1.7rem;
  font-weight: bold;
`

const Tbody = styled(Thead)`
  height: 12rem;
`
const TrCheck = styled(Thead)`
  width: 10%;
  border-right: 0.15rem solid;
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
`
const Td = styled(Tr)`
  height: 12rem;
`
