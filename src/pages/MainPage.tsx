import React from 'react'
import styled from 'styled-components'
import '../components/main/MainPage.css'
import $ from 'jquery'
import logo from '../images/header_logo.svg'
import MainContainer from '../components/main/MainContainer'
import Button from '../components/main/Button'
import FadeIn from 'react-fade-in'

const MainPage = () => {
  const text = ['buyself', 'Buy products', 'just by yourself']
  const list = []
  return (
    <div className="bo">
      <div className="Title">
        <MainPageLayout>
          <Logo src={logo} />
          <MainContainer />
        </MainPageLayout>
      </div>
    </div>
  )
}

export default MainPage

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: 100vw;
`
const Logo = styled.img`
  display: flex;
  width: 15rem;
  margin: 1rem;
  align-self: center;
  margin-top: 2rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 15rem;
  }
  @media all and (max-width: 767px) {
    width: 14rem;
  }
`
