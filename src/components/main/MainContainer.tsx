import React from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'
import ButtonBox from './ButtonBox'
import './MainContainer.css'
const MainContainer = () => {
  return (
    <Block>
      <LogoBox>
        <FadeIn transitionDuration={800} delay={2700}>
          <Div className="FontText">BUY PRODUCT</Div>
        </FadeIn>
        <FadeIn transitionDuration={800} delay={3100}>
          <Div className="FontText">BY YOURSELF!</Div>
        </FadeIn>
        <FadeIn transitionDuration={800} delay={3600}>
          <ButtonBox />
        </FadeIn>
      </LogoBox>
    </Block>
  )
}

export default MainContainer

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // position: absolute;
  // bottom: -40rem;
  margin-bottom: 8rem;
  margin-top: 0;
  @media all and (max-width: 767px) {
  }
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 30rem;
  color: black;
  font-size: 2.5rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 30rem;
    font-size: 2rem;
  }
  @media all and (max-width: 767px) {
    width: 21rem;
    font-size: 1.7rem;
  }
`

const Block = styled.div`
  display: flex;
  justify-content: center;
`
