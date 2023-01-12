import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  @media all and (max-width: 767px) {
`

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.3rem;
  width: 37rem;
  border-radius: 8px;
  font-size: 1.5rem;
  margin-left:30.5rem;
  margin-top:3rem;
  margin-bottom:3rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  @media all and (max-width: 767px) {
    height: 1.5rem;
  width: 20rem;
  margin-left:0;
  margin-top:2rem;
  margin-bottom:2rem;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6rem;
  width: 7.8rem;
  background: #ff6060;
  box-shadow: 2px 2px black;
  color: white;
  font-weight: 1000;
  border-radius: 8px;
  font-size: 2.0rem;
  cursor: pointer;
  margin-top:3rem;
  margin-left:1rem;
  @media all and (max-width: 767px) {
    height: 1.8rem;
    width: 4rem;
    font-size: 1.0rem;
    font-weight: 800;
    margin-top:2rem;

`

const ProductSearch = () => {
  return (
    <Div>
      <Input autoFocus />

      <Button>검색</Button>
    </Div>
  )
}

export default ProductSearch
