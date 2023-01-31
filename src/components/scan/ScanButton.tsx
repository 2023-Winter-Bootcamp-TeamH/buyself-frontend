import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* 결제버튼 & 취소버튼 디자인 */

const ScanButton = ({ text }: { text: string }) => {
  return (
    <Box>
      <Link to="/buy" style={{ textDecoration: 'none' }}>
        <StyledButton>{text}</StyledButton>
      </Link>
    </Box>
  )
}

export default ScanButton

const StyledButton = styled.button`
  height: 3.5rem;
  width: 12rem;
  background: #95dceb;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0.2rem 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: #cae7ed;
  }
  @media all and (max-width: 1023px) {
    width: 15rem;
    margin-bottom: 1rem;
  }
`
const Box = styled.div`
  display: flex;
`
