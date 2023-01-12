import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'

const ButtonBox = () => {
  return (
    <Box>
      <Link to="/scan" style={{ textDecoration: 'none' }}>
        <Button title="결제" />
      </Link>
      <Link to="/product" style={{ textDecoration: 'none' }}>
        <Button title="상품" />
      </Link>
    </Box>
  )
}

export default ButtonBox

const Box = styled.div`
  display: flex;
  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
