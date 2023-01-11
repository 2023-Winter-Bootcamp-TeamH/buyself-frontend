import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

/**
 * 체크리스트 하단바
 * 총 금액, 결제창
 */

const Footer = ({ price }: { price: string }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <FooterLayout>
      <TextBox>
        <Text>최종 결제 금액</Text>
        <Text>{price}원</Text>
      </TextBox>
      <Button
        onClick={() => {
          handleClick()
        }}
      >
        결제하러 가기
      </Button>
    </FooterLayout>
  )
}

export default Footer

const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  font-size: 1.7rem;
  width: 24rem;
  height: 4.3rem;
  border-radius: 20px;
  box-shadow: 3px 7px 0 0 #000;
  border: solid 2px #000;
  background-color: #95dceb;
  cursor: pointer;
`

const TextBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  font-weight: 600;
  font-size: 1.45rem;
  margin-bottom: 1.5rem;
`

const Text = styled.div`
  display: flex;
`
