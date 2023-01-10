import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 3rem;
  width: 10.5rem;
  background: #95dceb;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0.2rem 0.2rem;
  margin-left: 2rem;
`

const ScanButton = ({ text }: { text: string }) => {
  return <StyledButton>{text}</StyledButton>
}

export default ScanButton
