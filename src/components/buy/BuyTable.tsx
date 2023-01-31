import React from 'react'
import styled from 'styled-components'
import { HiTrash } from 'react-icons/hi'
import TdProduct from './TdProduct'
import { deleteProduct, RootState, store, totalPrice } from '../../store'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

/** 결제창 테이블표 */

const BuyTable = () => {
  const products = useSelector((state: RootState) => state.buyList.products)
  const checklists = useLocation()
  console.log('state', checklists.state)
  return (
    <TableBox>
      <Table>
        <Head>
          <ThProduct>구매정보</ThProduct>
          <Th>가격</Th>
          <Th>할인정보</Th>
          <Thlast>선택</Thlast>
        </Head>
        {products &&
          products.map((v, index) => (
            <Body key={index}>
              <ProductBox>
                <TdProduct
                  id={v.id}
                  img_url={v.img_url}
                  class_name={v.class_name}
                  price={v.price}
                  count={v.count}
                />
              </ProductBox>
              <Td>X</Td>
              <Tdlast>
                <IconButton onClick={() => store.dispatch(deleteProduct(v.id))}>
                  <HiTrash size="35" />
                </IconButton>
              </Tdlast>
            </Body>
          ))}
      </Table>
    </TableBox>
  )
}

export default BuyTable

const TableBox = styled.div`
  width: 95%;
  height: 38rem;
  background: white;
  border-radius: 0.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background: white;
    border-radius: 50rem;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
  }
  @media all and (min-width: 768px) and (max-width: 1160px) {
    height: 22rem;
    font-size: 1.3rem;
  }
  @media all and (max-width: 767px) {
    height: 20rem;
  }
`

const Table = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`

const Head = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 0 1rem 0 0;
  border-bottom: 1px solid grey;
  font-size: 1rem;
  font-weight: bold;
  white-space: pre-wrap;
  @media all and (min-width: 768px) and (max-width: 1160px) {
    height: 2.5rem;
    font-size: 1.1rem;
  }
  @media all and (max-width: 767px) {
    height: 2.2rem;
    font-size: 1rem;
  }
`

const Body = styled(Head)`
  height: 6rem;
  @media all and (max-width: 1160px) {
    height: 5rem;
  }
`
const ThProduct = styled(Head)`
  width: 55%;
  height: 100%;
  border-right: 1px solid grey;
  border-radius: 0;
`
const Th = styled(ThProduct)`
  width: 15%;
`
const Thlast = styled(Th)`
  border-right: 0;
`
const ProductBox = styled.div`
  width: 70.1%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Td = styled(Body)`
  width: 15%;
  height: 100%;
  border-right: 1px solid grey;
  border-radius: 0;
`
const Tdlast = styled(Td)`
  border-right: 0;
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
