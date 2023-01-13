import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 8rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-right: 5rem;
  }
  @media all and (max-width: 767px) {
    margin-right: 3rem;
  }
`

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.3rem;
  width: 37rem;
  border-radius: 8px;
  font-size: 1.5rem;
  margin-left: 30.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 6rem;
  }
  @media all and (max-width: 767px) {
    height: 2rem;
    width: 18rem;
    margin-left: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
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
  font-weight: 800;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 3rem;
  margin-left: 1rem;
  &:hover {
    background: #ff7d6d;
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 7rem;
    font-size: 1.2rem;
    font-weight: 800;
  }
  @media all and (max-width: 767px) {
    height: 2.3rem;
    width: 4rem;
    font-size: 1rem;
    font-weight: 800;
    margin-top: 2rem;
  }
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
