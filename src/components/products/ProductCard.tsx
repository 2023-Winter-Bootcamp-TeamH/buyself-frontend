import React from 'react'
import styled from 'styled-components'
import icecream from '../../images/test_image.png'
const ProductCard = ({ title, price }: { title: string; price: string }) => {
  return (
    <div>
      <Block>
        <IMGBlock>
          <IMG src={icecream} />
        </IMGBlock>
        <TitleText>{title}</TitleText>
        <PriceText>{price}</PriceText>
        <CheckButton>체크리스트 추가</CheckButton>
      </Block>
    </div>
  )
}

export default ProductCard

const TitleText = styled.div`
display:flex;
justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top:1rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top:0;
    margin-top:0.5rem;

`

const PriceText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 1000;
  margin-top: 0.8rem;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-top: 0;
    margin-top: 0.3rem;
  }
`
const Block = styled.div`
  width: 17rem;
  height: 30rem;
  margin: 1rem 4rem 1rem 4rem;
  border-radius: 20px;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 0;
    margin: 0.5rem 2rem 0.5rem 2rem;
  }
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 17rem;
    margin: 0;
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
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 10rem;
  }
`
const IMG = styled.img`
  width: 15rem;
  @media all and (max-width: 767px) {
    width: 7rem;
  }
`
const CheckButton = styled.button`
display:flex;
justify-content: center;
align-items: center;
background: #95DCEB;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem;
  height: 2.5rem;
  width: 10rem;
  font-weight: bold;
  margin-left:3.5rem;
  margin-top:1rem;
  @media all and (max-width: 767px) {
    height: 1.5rem;
  width: 6rem;
  box-shadow: 0.1rem 0.1rem;
  font-size:0.5rem;
  margin-left:0;
  margin-left:1rem;
  margin-top:0;
  margin-top:0.5rem;

    `
