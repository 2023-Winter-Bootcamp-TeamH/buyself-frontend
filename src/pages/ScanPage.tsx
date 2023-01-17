import React, { useState } from 'react'
import Header from '../components/common/Header'
import styled from 'styled-components'
import ButtonLayout from '../components/scan/ButtonLayout'
import Scanner from '../components/scan/Scanner'
import BuyList from '../components/scan/BuyList'
import ItemList from '../components/scan/BuyItem'
import Modal from '../components/common/Modal'

/* 상품인식페이지 */

const ScanPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Header />
      <ScanPageLayout>
        <Scanner
          onClick={() => {
            handleClick()
          }}
        />
        {isOpen && (
          <Modal
            onClose={() => {
              setIsOpen(false)
            }}
          />
        )}
        <BuyList />
        <ButtonLayout />
      </ScanPageLayout>
    </>
  )
}

export default ScanPage

const ScanPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: space-evenly;
`
