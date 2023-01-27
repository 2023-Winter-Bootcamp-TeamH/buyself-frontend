import React, { useState } from 'react'
import Header from '../components/common/Header'
import styled from 'styled-components'
import Scanner from '../components/scan/Scanner'
import BuyList from '../components/scan/BuyList'
import Modal from '../components/common/Modal'
import ChecklistBox from '../components/scan/ChecklistBox'
import { Default, Mobile } from '../components/scan/MediaQuery'
import ScanButton from '../components/scan/ScanButton'

/* 상품인식페이지 */

const ScanPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Header />
      <Default>
        <ScanPageLayout>
          <LeftLayout>
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
          </LeftLayout>
          <RightLayout>
            <ChecklistBox />
          </RightLayout>
        </ScanPageLayout>
      </Default>
      <Mobile>
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
          <ChecklistBox />
          <BuyList />
          <ScanButton text="결제하기" />
        </ScanPageLayout>
      </Mobile>
    </>
  )
}

export default ScanPage

const ScanPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  @media all and (max-width: 1023px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`

const LeftLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 73%;
  height: 100%;
  @media all and (min-width: 1221px) and (max-width: 1350px) {
    width: 70%;
  }
  @media all and (min-width: 767px) and (max-width: 1220px) {
    width: 65%;
  }
`

const RightLayout = styled(LeftLayout)`
  width: 27%;
  align-items: flex-start;
  padding-left: 1rem;
`
