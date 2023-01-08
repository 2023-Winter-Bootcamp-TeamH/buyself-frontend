import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/common/NotFound'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
