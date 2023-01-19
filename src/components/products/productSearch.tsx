import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

/** 상품 검색 기능  */

const ProductSearch = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  const onSearch = (e: React.MouseEvent<HTMLElement>) => {
    if (search === '') {
      e.preventDefault()
      alert('검색어를 입력해주세요')
    }
    navigate('/search', { state: search })
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (search === '') {
        e.preventDefault()
        alert('검색어를 입력해주세요')
      }
      navigate('/search', { state: search })
    }
  }

  return (
    <Div>
      <Input
        autoFocus
        type="text"
        placeholder="상품 이름 검색하기"
        onChange={onChangeSearch}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={onSearch}>검색</Button>
    </Div>
  )
}

export default ProductSearch

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 1.5rem;
  @media all and (min-width: 1024px) and (max-width: 1262px) {
    justify-content: center;
  }
  @media all and (max-width: 1023px) {
    align-items: center;
    justify-content: center;
  }
`

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.3rem;
  width: 40%;
  border-radius: 8px;
  font-size: 1.5rem;
  margin-right: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  @media all and (min-width: 1024px) and (max-width: 1262px) {
    margin-left: 2rem;
    width: 50%;
    font-size: 1rem;
  }
  @media all and (max-width: 1023px) {
    height: 2rem;
    width: 50%;
    margin-left: 2rem;
    font-size: 1rem;
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
  margin-right: 6rem;
  cursor: pointer;
  &:hover {
    background: #ff7d6d;
  }
  @media all and (min-width: 1024px) and (max-width: 1262px) {
    margin-right: 0;
  }
  @media all and (max-width: 1023px) {
    height: 2.3rem;
    width: 4rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    font-weight: 800;
    margin-right: 0;
  }
`
