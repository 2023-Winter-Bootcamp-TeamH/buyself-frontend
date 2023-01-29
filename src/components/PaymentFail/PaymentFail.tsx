import React from 'react'
import styled from 'styled-components'
import { FaExclamationCircle } from 'react-icons/fa'
import './PaymentFail.css'
import PaymentButton from './PaymentFailButton'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

/** 결제완료페이지 화면
 * 결제금액
 */

const PaymentmainFail = () => {
  const navigate = useNavigate()
  return (
    <Block>
      <ImgBlock>
        <Header>
          <Complte>결제실패</Complte>
        </Header>
        <Contour />
        <Body>
          <Icon>
            <FaExclamationCircle className="PayIcon" />{' '}
          </Icon>
          <TitleDesign>
            <PaymentSentence>주문처리에 실패하여 </PaymentSentence>
            <FailSentence>주문을 완료하지 못했습니다.</FailSentence>
          </TitleDesign>
        </Body>
        <Contour />
        <BoxDesign>
          <Box>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <PaymentButton title="메인으로" IsRed />
            </Link>
            <div
              onClick={() => {
                navigate(-2)
              }}
            >
              <PaymentButton title="다시 주문하기" />
            </div>
          </Box>
        </BoxDesign>
      </ImgBlock>
    </Block>
  )
}

export default PaymentmainFail

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
  font-size: 7.5rem;
  margin-top: 1.1rem;
  margin-bottom: 1rem;
  @media all and (max-width: 767px) {
    font-size: 115px;
  }
`

const TitleDesign = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`

const PaymentSentence = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
  font-size: 2.1rem;
  color: #95dceb;
  font-weight: 800;
  @media all and (max-width: 767px) {
    margin-left: 1rem;
    margin-right: 0;
    font-size: 1.3rem;
  }
`

const FailSentence = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 2.1rem;
  color: dimgrey;
  font-weight: bold;
  @media all and (max-width: 767px) {
    font-size: 1.3rem;
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
