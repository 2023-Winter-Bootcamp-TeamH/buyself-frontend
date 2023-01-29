import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/common/NotFound'
import ScrollToTop from './components/common/ScrollToTop'
import MainPage from './pages/MainPage'
import ScanPage from './pages/ScanPage'
import ProductPage from './pages/ProductPage'
import SearchPage from './pages/SearchPage'
import BuyPage from './pages/BuyPage'
import PaymentPage from './pages/PaymentPage'
import PaymentFailPage from './pages/PaymentFailPage'
import './App.css'

function App() {
  return (
    <div className="Font">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/pay" element={<PaymentPage />} />
          <Route path="/pay/Fail" element={<PaymentFailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
