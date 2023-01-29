import React from 'react'
import styled from 'styled-components'
import typo from '../../images/typo5.svg'
import FadeIn from 'react-fade-in'
import ButtonBox from './ButtonBox'

const MainContainer = () => {
  return (
    <Block>
      <Box>
        <FadeIn transitionDuration={800} delay={2100}>
          <Typo className="animate__slideInUp" src={typo} />
        </FadeIn>
        <FadeIn transitionDuration={800} delay={3000}>
          <ButtonBox />
        </FadeIn>
      </Box>
    </Block>
  )
}

export default MainContainer

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // position: absolute;
  // bottom: -40rem;
  margin-bottom: 10rem;
  @media all and (max-width: 767px) {
    margin-left: 1.25rem;
  }
`
const Typo = styled.img`
  display: flex;
  width: 32rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 35rem;
  }
  @media all and (max-width: 767px) {
    width: 21rem;
    margin-left: 1rem;
  }
`

const Block = styled.div`
  display: flex;
  justify-content: center;
`
