import React from 'react'
import styled from 'styled-components'
import MainContainer from '../components/main/MainContainer'
import img from '../images/main_image4.png'
import logo from '../images/header_logo.svg'

const MainPage = () => {
  return (
    <MainPageLayout>
      <Logo src={logo} />
      <MainContainer />
    </MainPageLayout>
  )
}

export default MainPage

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`

const Logo = styled.img`
  display: flex;
  width: 20rem;
  align-self: center;
  margin-top: 2rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 15rem;
  }
  @media all and (max-width: 767px) {
    width: 14rem;
  }
`
