import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { store, addChecklist } from '../../store'
import Toast from './Toast'
import FadeIn from 'react-fade-in'
import { BsCartPlus } from 'react-icons/bs'
import { Default, Mobile } from '../../components/scan/MediaQuery'

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
  const [isHover, setIsHover] = useState(false)
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
      <FadeIn transitionDuration={500} delay={0}>
        <Block>
          <IMGBlock
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            {isHover ? (
              <IMGBox>
                <IMG src={data.img_url} isHover={true} />
                <Title>{data.class_name}</Title>
              </IMGBox>
            ) : (
              <IMG src={data.img_url} />
            )}
          </IMGBlock>
          <Info>
            <PriceText>₩{data.price}</PriceText>
            <CheckButton onClick={HandleClickAdd}>
              <Default>
                <BsCartPlus size="23" />
              </Default>
              <Mobile>
                <BsCartPlus size="17" />
              </Mobile>
            </CheckButton>
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

const Block = styled.div`
  width: 17rem;
  height: 26rem;
  border-radius: 20px;
  margin: 2rem 3rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 14rem;
    height: 22rem;
    margin: 1rem 2rem;
  }
  @media all and (max-width: 767px) {
    width: 10rem;
    height: 15rem;
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
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 14rem;
    height: 17rem;
  }
  @media all and (max-width: 767px) {
    width: 10rem;
    height: 11rem;
  }
`

const IMGBox = styled(IMGBlock)`
  flex-direction: column;
  position: relative;
`

const IMG = styled.img<{ isHover?: boolean }>`
  width: ${(props) => (props.isHover ? '14rem' : '13rem')};
  display: flex;
  align-self: center;
  @media all and (max-width: 767px) {
    width: ${(props) => (props.isHover ? '8rem' : '7rem')};
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`

const Title = styled.div`
  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bolder;
  background: #ff8686;
  color: white;
  border-radius: 0 0 20px 20px;
  opacity: 0.7;
  @media all and (max-width: 767px) {
    height: 3rem;
    font-size: 1rem;
  }
`

const PriceText = styled.div`
  width: 13rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 1000;
  margin-right: 1rem;
  margin-left: 0.2rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  @media all and (max-width: 767px) {
    width: 7rem;
    height: 2rem;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`

const CheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #95dceb;
  cursor: pointer;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  width: 4.5rem;
  height: 2.6rem;
  &:hover {
    background: #c6dceb;
  }
  @media all and (max-width: 767px) {
    width: 3rem;
    height: 2rem;
    box-shadow: 0.1rem 0.1rem;
  }
`
