import React from 'react'
import Header from '../components/common/Header'
import PaymentmainFail from '../components/PaymentFail/PaymentFail'
import { createGlobalStyle } from 'styled-components'
const PaymentFailPage = () => {
  return (
    <>
      <FailPageStyle />
      <Header />
      <PaymentmainFail />
    </>
  )
}

export default PaymentFailPage

const FailPageStyle = createGlobalStyle`
  body {
    background-color: #ff9668;
  }
`
