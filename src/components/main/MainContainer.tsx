import React from 'react'
import styled from 'styled-components'
import typo from '../../images/typo5.svg'
import FadeIn from 'react-fade-in'
import ButtonBox from './ButtonBox'

const MainContainer = () => {
  return (
    <Box>
      <FadeIn transitionDuration={800} delay={200}>
        <Typo className="animate__slideInUp" src={typo} />
        <ButtonBox />
      </FadeIn>
    </Box>
  )
}

export default MainContainer

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.5rem;
  margin-left: 4rem;
  @media all and (max-width: 767px) {
    margin-left: 1.25rem;
  }
`
const Typo = styled.img`
  display: flex;
  width: 43.75rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 35rem;
  }
  @media all and (max-width: 767px) {
    width: 21rem;
    margin-left: 1rem;
  }
`
