import React from 'react'
import Header from '../components/common/Header'
import Paymentmain from '../components/Payment/Paymentmain'
import { createGlobalStyle } from 'styled-components'

const PaymentPage = () => {
  return (
    <>
      <PayPageStyle />
      <Header />
      <Paymentmain />
    </>
  )
}

export default PaymentPage

const PayPageStyle = createGlobalStyle`
  body {
    background-color: #ff9668;
  }
`
