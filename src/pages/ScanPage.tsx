import React from 'react'
import Header from '../components/common/Header'
import ButtonLayout from '../components/scan/ButtonLayout'
import Scanner from '../components/scan/Scanner'
import ScanPageLayout from '../components/scan/ScanPageLayout'
import BuyList from '../components/scan/BuyList'

interface BuyCardProps {
  name: string
  price: string
}

const ItemList: BuyCardProps[] = [
  {
    name: '짜요짜요',
    price: '1200원',
  },
]

const ScanPage = () => {
  return (
    <>
      <Header />
      <ScanPageLayout>
        <Scanner />
        <BuyList ItemList={ItemList} />
        <ButtonLayout />
      </ScanPageLayout>
    </>
  )
}

export default ScanPage
