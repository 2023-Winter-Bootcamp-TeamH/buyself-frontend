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
  width: 9.5rem;
  height: 3.9rem;
  margin: 0 1rem 5rem 1rem;
  background-color: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 7px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 1.7rem;
  font-weight: bold;
  color: black;
  @media all and (max-width: 767px) {
    width: 15rem;
    height: 4.5rem;
    margin: 0 1rem 3rem 1rem;
  }
  &:hover {
    background-color: #C9CACA;
`
