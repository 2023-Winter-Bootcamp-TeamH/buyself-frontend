import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { customAxios } from '../common/CustomAxios'
import ProductCard from '../products/ProductCard'

/** 검색 상품 컴포넌트 */

interface Response {
  data: Data[]
}

interface Data {
  class_name: string
  id: number
  img_url: string
  price: number
  count: number
}

const SearchCardList = ({ keyWord }: { keyWord: string | null }) => {
  const [data, setData] = useState<Data[]>()
  const [zero, setZero] = useState(false)

  const getData = useCallback(async () => {
    setZero(false)
    try {
      const res = await customAxios.get<Response>(`/search?kw=${keyWord}`)
      setData(res.data.data)
      if (res.data.data.length === 0) {
        setZero(true)
      }
    } catch (err) {
      console.log(err)
    }
  }, [data])
  useEffect(() => {
    void getData()
    console.log('키워드입력')
  }, [keyWord])

  return (
    <>
      {zero ? (
        <Zero>해당하는 상품을 찾을 수 없습니다.</Zero>
      ) : (
        <Common>
          {data &&
            data.map((data) => <ProductCard key={data.id} data={data} />)}
        </Common>
      )}
    </>
  )
}

export default SearchCardList

const Common = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding-bottom: 3rem;
  margin: 3rem auto;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-evenly;
`
const Zero = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Pretendard;
`
