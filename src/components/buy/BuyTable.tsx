import React, { useState } from 'react'
import styled from 'styled-components'
import { HiTrash } from 'react-icons/hi'
import TdProduct from './TdProduct'

/** 결제창 테이블표 */

interface Props {
  name: string
  price: number
  count: number
  check: boolean
}

const BuyTable = ({ BuyItem }: { BuyItem: Props[] }) => {
  const rows = BuyItem
  const [checkItems, setCheckItems] = useState<string[]>([])

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: string[] = []
      rows.forEach((list) => idArray.push(list.name))
      setCheckItems(idArray)
    } else {
      setCheckItems([])
    }
  }
  const handleSingleCheck = (checked: boolean, id: string) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id])
    } else {
      setCheckItems(checkItems.filter((el: string) => el !== id))
    }
  }

  return (
    <TableBox>
      <Table>
        <Head>
          <ThCheck>
            <StyledInput
              type="checkbox"
              onChange={(e) => {
                handleAllCheck(e.target.checked)
              }}
              checked={checkItems.length === rows.length}
            />
          </ThCheck>
          <ThProduct>구매정보</ThProduct>
          <Th>가격</Th>
          <Th>할인정보</Th>
          <Th>선택</Th>
        </Head>
        {rows &&
          rows.map((v, index) => (
            <Body key={index}>
              <TdCheck>
                <StyledInput
                  key={v.name}
                  type="checkbox"
                  onChange={(e) => {
                    handleSingleCheck(e.target.checked, v.name)
                  }}
                  checked={!!checkItems.includes(v.name)}
                />
              </TdCheck>
              <ProductBox>
                <TdProduct name={v.name} price={v.price} count={v.count} />
              </ProductBox>
              <Td>X</Td>
              <Td>
                <IconButton>
                  <HiTrash size="35" />
                </IconButton>
              </Td>
            </Body>
          ))}
      </Table>
    </TableBox>
  )
}

export default BuyTable

const TableBox = styled.div`
  width: 95%;
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

const Head = styled(Table)`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 0.16rem solid;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: pre-wrap;
  @media all and (min-width: 768px) and (max-width: 1325px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.2rem;
  }
`

const Body = styled(Head)`
  height: 12rem;
`
const ThCheck = styled(Head)`
  width: 10%;
  border-right: 0.16rem solid;
  border-bottom: 0;
`
const ThProduct = styled(ThCheck)`
  width: 39%;
`
const Th = styled(ThCheck)`
  width: 17%;
`
const TdCheck = styled(Body)`
  width: 10%;
  border-right: 0.16rem solid;
  border-bottom: 0;
`
const ProductBox = styled.div`
  width: 56.6%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Td = styled(TdCheck)`
  width: 17%;
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
const StyledInput = styled.input`
  appearance: none;
  border: 0.2rem solid black;
  border-radius: 0.35rem;
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: black;
`
