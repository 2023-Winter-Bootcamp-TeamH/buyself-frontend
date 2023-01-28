import React from 'react'
import styled from 'styled-components'
import '../components/main/MainPage.css'
import $ from 'jquery'
import logo from '../images/header_logo.svg'
import MainContainer from '../components/main/MainContainer'

const MainPage = () => {
  const text = ['buyself', 'Buy products', 'just by yourself']
  const list = []
  return (
    <div className="bo">
      <div className="Title">
        {text.map((i: any, v: any) => (
          <div className="ac" key="i">
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage

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
