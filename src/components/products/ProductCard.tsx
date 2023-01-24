import React, { useState } from 'react'
import styled from 'styled-components'
import { store, addChecklist } from '../../store'
import Toast from './Toast'
import FadeIn from 'react-fade-in'

/** 상품 내용 삽입 카드
 * 상품 이미지
 * 상품 이름,가격
 * 체크리스트
 */

interface ProductCardProps {
  class_name: string
  id: number
  img_url: string
  price: number
}

const ProductCard = ({ data }: { data: ProductCardProps }) => {
  const [isActive, setIsActive] = useState(false)
  const HandleClickAdd = () => {
    setIsActive(true)
    store.dispatch(
      addChecklist({
        class_name: data.class_name,
        id: data.id,
        img_url: data.img_url,
        price: data.price,
        count: 1,
        checked: false,
      })
    )
  }

  return (
    <>
      <FadeIn transitionDuration={600} delay={100}>
        <Block>
          <IMGBlock>
            <IMG src={data.img_url} />
          </IMGBlock>
          <Info>
            <TitleText>{data.class_name}</TitleText>
            <PriceText>{data.price}원</PriceText>
            <CheckButton onClick={HandleClickAdd}>체크리스트 추가</CheckButton>
          </Info>
        </Block>
      </FadeIn>
      <Toast
        isActive={isActive}
        setIsActive={setIsActive}
        message="상품이 등록되었습니다"
      />
    </>
  )
}
export default ProductCard

const TitleText = styled.div`
display:flex;
justify-content: center;
  font-size: 1.5rem;
  font-weight: bolder;
  margin-top:1.2rem;
  margin-bottom:0.3rem;
  @media all and (max-width: 767px) {
    font-size: 0.8rem;
    margin-top:1rem;
    margin-bottom:0.1rem;
`

const PriceText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 1000;
  margin-bottom: 0.3rem;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-bottom: 0;
  }
`
const Block = styled.div`
  width: 17rem;
  height: 30rem;
  border-radius: 20px;
  margin: 3rem 4rem;
  @media all and (min-width: 807px) and (max-width: 1500px) {
    margin: 1rem 2rem;
  }
  @media all and (min-width: 768px) and (max-width: 806px) {
    width: 14rem;
    height: 28rem;
    margin: 1rem 2rem;
  }
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 17rem;
    margin: 1rem 2rem;
  }
`
const IMGBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 17rem;
  height: 20rem;
  background: white;
  border-radius: 20px;
  padding: 0.5rem 0;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 15rem;
    height: 18rem;
  }
  @media all and (max-width: 767px) {
    width: 9.5rem;
    height: 11rem;
    margin-top: 1rem;
  }
`
const IMG = styled.img`
  display: flex;
  align-self: center;
  width: 13rem;
  &:hover {
    width: 14rem;
  }
  @media all and (max-width: 767px) {
    width: 7rem;
    &:hover {
      width: 8rem;
    }
  }
`
const CheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #95dceb;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem;
  height: 3rem;
  width: 12rem;
  font-weight: 800;
  margin-top: 0.5rem;
  &:hover {
    background: #c6dceb;
  }
  @media all and (max-width: 767px) {
    height: 2rem;
    width: 6rem;
    box-shadow: 0.1rem 0.1rem;
    font-size: 0.5rem;
    margin-top: 0.5rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 767px) {
    margin-left: 1rem;
  }
`
