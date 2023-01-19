import React from 'react'
import styled from 'styled-components'
import { BsCamera } from 'react-icons/bs'

/* 웹캠 실행버튼 */

const Scanner = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledButton onClick={onClick}>
      <BsCamera size="70" />
    </StyledButton>
  )
}

export default Scanner

const StyledButton = styled.button`
  height: 6rem;
  width: 13rem;
  background: #ff6d6d;
  border: solid 0.2rem;
  border-radius: 2.9rem;
  box-shadow: 0 0.5rem rgba(0, 0, 0, 0.25);
  margin-top: 6rem;
  cursor: pointer;
  &:hover {
    background-color: #ff9292;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    border-radius: 2.7rem;
  }
  @media all and (max-width: 767px) {
    height: 5.5rem;
    width: 12rem;
    margin-top: 3rem;
    border-radius: 3rem;
    box-shadow: 0 0.8rem 0.2rem rgba(0, 0, 0, 0.25);
  }
`
