import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'
import './Paymentmain.css'
import PaymentButton from './PaymentButton'
import { Link } from 'react-router-dom'

const Paymentmain = () => {
  return (
    <Block>
      <ImgBlock>
        <Div>
          <Complte>결제완료</Complte>
        </Div>
        <hr />
        <PayDiv>
          <TitleDiv>
            <PayComplte>감사합니다.</PayComplte>
            <PaymentComplte> 결제가 완료되었습니다.</PaymentComplte>
          </TitleDiv>
          <IconFont>
            <FaCheckCircle className="PayIcon" />
          </IconFont>
        </PayDiv>
        <hr />
        <PriceDiv>총 결제 금액: xx원</PriceDiv>
        <MoveDiv>
          <Box>
            <Link to="/product" style={{ textDecoration: 'none' }}>
              <PaymentButton title="상품 페이지로" />
            </Link>
            <Link to="/main" style={{ textDecoration: 'none' }}>
              <PaymentButton title="메인으로" IsRed />
            </Link>
          </Box>
        </MoveDiv>
      </ImgBlock>
    </Block>
  )
}

export default Paymentmain

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  @media all and (max-width: 767px) {
    margin-top: 0;
  }
`

const ImgBlock = styled.div`
  width: 70rem;
  height: 32rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.3);
  @media all and (max-width: 767px) {
    height: 33.5rem;
    width: 22rem;
    font-size: 1rem;
    font-weight: 800;
    margin-top: 2rem;
  }
`

const Div = styled.div`
  display: flex;
`
const PayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  @media all and (max-width: 767px) {
    font-size: 0;
    font-size: 1.5rem;
  }
`
const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 800;
  @media all and (max-width: 767px) {
    font-size: 0;
    font-size: 0.9rem;
  }
`
const MoveDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  border-radius: 0 0 16px 16px;
  border-top: 0.1px solid gray;
`

const Complte = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  margin-top: 0.3rem;
  font-weight: bolder;
  margin-left: 0.8rem;
  @media all and (max-width: 767px) {
    font-size: 0;
    font-size: 1.4rem;
    margin-left: 0;
    margin-left: 0.3rem;
  }
`

const PayComplte = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-top: 2.5rem;
  color: #95dceb;
  font-weight: 800;
  @media all and (max-width: 767px) {
    font-size: 0;
    font-size: 2rem;
  }
`
const PaymentComplte = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-top: 1.8rem;
  color: #95dceb;
  font-weight: 800;
  margin-left: 1rem;
  @media all and (max-width: 767px) {
    font-size: 0;
    font-size: 2rem;
    margin-left: 0;
    margin-left: 1rem;
  }
`

const Box = styled.div`
  display: flex;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`

const IconFont = styled.div`
  font-size: 150px;
  @media all and (max-width: 767px) {
    margin-top: 1.1rem;
    margin-bottom: 1rem;
    font-size: 115px;
  }
`
