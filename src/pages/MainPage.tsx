import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import '../components/main/MainPage.css'
import $ from 'jquery'
import logo from '../images/header_logo.svg'
import MainContainer from '../components/main/MainContainer'
import Button from '../components/main/Button'
import FadeIn from 'react-fade-in'

const MainPage = () => {
  return (
    <>
      <MainPageStyle />
      <div className="bo">
        <div className="Title">
          <MainPageLayout>
            <FadeIn transitionDuration={600} delay={2000}>
              <Box>
                <Logo src={logo} />
              </Box>
            </FadeIn>
            <MainContainer />
          </MainPageLayout>
        </div>
      </div>
    </>
  )
}

export default MainPage

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  justify-content: space-between;
  width: 100vw;
`
const Logo = styled.img`
  display: flex;
  justify-content: center;
  width: 25.5rem;
  margin: 1rem;
  align-self: center;
  margin-top: 13rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 15rem;
  }
  @media all and (max-width: 767px) {
    width: 14rem;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: center;
`

const MainPageStyle = createGlobalStyle`
  body {
    background-color:  #F5FFFA;
  }
`
