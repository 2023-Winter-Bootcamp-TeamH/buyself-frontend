import React from 'react'
import styled from 'styled-components'
/**
 * 체크리스트 하단바
 * 총 금액
 */

const Footer = ({ price }: { price: number }) => {
  return (
    <FooterLayout>
      <TextBox>
        <Text>결제 예정 금액</Text>
        <Text>{price}원</Text>
      </TextBox>
    </FooterLayout>
  )
}

export default Footer

const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
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
