import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/common/NotFound'
import ScrollToTop from './components/common/ScrollToTop'
import { createGlobalStyle } from 'styled-components'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ff9668;
  }
`
