import React from 'react'
import styled from 'styled-components'

/* 결제버튼 & 취소버튼 디자인 */

const ScanButton = ({ text }: { text: string }) => {
  return <StyledButton>{text}</StyledButton>
}

export default ScanButton

const StyledButton = styled.button`
  height: 3.5rem;
  width: 11rem;
  background: #95dceb;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0.2rem 0.2rem;
  margin: 1.5rem 0 2rem;
  cursor: pointer;
  &:hover {
    background-color: #cae7ed;
  }
`
