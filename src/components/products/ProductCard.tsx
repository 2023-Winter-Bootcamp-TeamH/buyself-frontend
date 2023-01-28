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
      <FadeIn transitionDuration={600} delay={100}>
        <Block>
          <IMGBlock
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            {isHover ? (
              <HoverBox>
                <Info>
                  <TitleText>{data.class_name}</TitleText>
                  <PriceText>₩{data.price}</PriceText>
                </Info>
              </HoverBox>
            ) : (
              <IMG src={data.img_url} />
            )}
          </IMGBlock>
          <Info>
            <CheckButton onClick={HandleClickAdd}>
              <Default>
                <BsCartPlus size="35" />
              </Default>
              <Mobile>
                <BsCartPlus size="25" />
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
  width: 100%;
  height: 20rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 17rem;
  }
  @media all and (max-width: 767px) {
    height: 11rem;
  }
`

const HoverBox = styled(IMGBlock)`
  height: 100%;
  opacity: 1;
  background: #e4e4e4;
`

const IMG = styled.img`
  display: flex;
  align-self: center;
  width: 13rem;
  @media all and (max-width: 767px) {
    width: 7rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  font-weight: bolder;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
  }
`

const PriceText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 1000;
  margin-top: 1rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 0;
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
  width: 50%;
  font-weight: 800;
  margin-top: 1.5rem;
  &:hover {
    background: #c6dceb;
  }
  @media all and (max-width: 767px) {
    height: 2rem;
    box-shadow: 0.1rem 0.1rem;
    margin-top: 1rem;
  }
`
