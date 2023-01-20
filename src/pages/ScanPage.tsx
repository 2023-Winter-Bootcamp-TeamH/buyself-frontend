import React, { useState } from 'react'
import Header from '../components/common/Header'
import styled from 'styled-components'
import ButtonLayout from '../components/scan/ButtonLayout'
import Scanner from '../components/scan/Scanner'
import BuyList from '../components/scan/BuyList'
import Modal from '../components/common/Modal'
import ChecklistBox from '../components/scan/ChecklistBox'

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
        <BuyLayout>
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
        </BuyLayout>
        <CheckLayout>
          <ChecklistBox />
        </CheckLayout>
      </ScanPageLayout>
    </>
  )
}

export default ScanPage

const ScanPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: cneter;
  margin-top: 7rem;
`

const BuyLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`

const CheckLayout = styled.div`
  width: 30%;
`
