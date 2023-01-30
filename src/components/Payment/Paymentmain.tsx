import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'
import './Paymentmain.css'
import PaymentButton from './PaymentButton'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

/** 결제완료페이지 화면
 * 결제금액
 */

const Paymentmain = () => {
  const total = useSelector((state: RootState) => state.buyList.productTotal)
  return (
    <Block>
      <ImgBlock>
        <Header>
          <Complte>결제완료</Complte>
        </Header>
        <Contour />
        <Body>
          <Icon>
            <FaCheckCircle className="PayIcon" />{' '}
          </Icon>
          <TitleDesign>
            <PaymentSentence>결제가 정상적으로 완료되었습니다</PaymentSentence>
            <ThanksSentence>이용해주셔서 감사합니다</ThanksSentence>
          </TitleDesign>
        </Body>
        <Contour />
        <BoxDesign>
          <Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <PaymentButton title="메인으로" IsRed />
            </Link>
            <Link to="/product" style={{ textDecoration: 'none' }}>
              <PaymentButton title="상품 페이지로" />
            </Link>
          </Box>
        </BoxDesign>
      </ImgBlock>
    </Block>
  )
}

export default Paymentmain

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  @media all and (max-width: 767px) {
    margin-top: 0;
  }
`

const ImgBlock = styled.div`
  width: 70%;
  border-radius: 16px;
  background: white;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.3);
  @media all and (max-width: 767px) {
    width: 80%;
    font-weight: 800;
    margin-top: 4rem;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
`

const Complte = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bolder;
  @media all and (max-width: 767px) {
    font-size: 1.4rem;
  }
`

const Contour = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
`

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  @media all and (max-width: 767px) {
    font-size: 0;
    font-size: 1.5rem;
  }
`

const Icon = styled.div`
  font-size: 6rem;
  @media all and (max-width: 767px) {
    margin-top: 1.1rem;
    margin-bottom: 1.1rem;
    font-size: 115px;
  }
`

const TitleDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PaymentSentence = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;
  margin-left: 1rem;
  font-size: 2.3rem;
  color: #95dceb;
  font-weight: 800;
  @media all and (max-width: 820px) {
    margin-left: 0;
    font-size: 1.2rem;
  }
`

const ThanksSentence = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.3rem;
  color: dimgrey;
  font-weight: bold;
  @media all and (max-width: 767px) {
    font-size: 1.1rem;
  }
`

const BoxDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  padding: 0.5rem 0;
  border-radius: 0 0 16px 16px;
`

const Box = styled.div`
  display: flex;
`
