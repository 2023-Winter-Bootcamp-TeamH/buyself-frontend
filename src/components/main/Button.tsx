import React from 'react'
import styled from 'styled-components'

const Button = ({ title }: { title: string }) => {
  return <Box>{title}</Box>
}

export default Button

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 4.8rem;
  margin: 3rem 3.125rem 0 0;
  background-color: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 7px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 1.7rem;
  font-weight: bold;
  color: black;
  @media all and (max-width: 767px) {
    width: 15rem;
    height: 4.5rem;
  }
  &:hover {
    background-color: #C9CACA;
`
