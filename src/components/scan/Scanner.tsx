import React from 'react'
import styled from 'styled-components'
import { BsCamera } from 'react-icons/bs'

const StyledButton = styled.button`
  height: 6.8rem;
  width: 18rem;
  background: #ff6d6d;
  border: solid 0.2rem;
  border-radius: 1.9rem;
  box-shadow: 0 0.4rem rgba(0, 0, 0, 0.25);
`

const Scanner = () => {
  return (
    <StyledButton>
      <BsCamera size="74" />
    </StyledButton>
  )
}

export default Scanner
