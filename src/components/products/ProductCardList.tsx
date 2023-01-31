import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { Pagination } from './Pagination'
import { customAxios } from '../common/CustomAxios'

/** 상품 API 및 상품 페이지네이션 구현
 * 상품 품목
 * 페이지 수
 */

interface Response {
  data: Data[]
  meta: Meta
}

export interface Meta {
  has_next: boolean
  has_prev: boolean
  next_page: number
  page: number
  pages: number
  prev_page: number
  total_count: number
}

export interface Data {
  class_name: string
  id: number
  img_url: string
  price: number
}

const ProductCardList = () => {
  const [data, setdata] = useState<Data[]>()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(6)
  const handlePages = (updatePage: number) => setPage(updatePage)

  const fetchData = async (page: number) => {
    try {
      const response = await customAxios.get<Response>(
        `/products?page=${page} `
      )
      const { data } = response.data
      setdata(data)
      setTotalPages(response.data.meta.pages)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData(page)
  }, [page])

  return (
    <>
      <Div>
        {data && data.map((data) => <ProductCard key={data.id} data={data} />)}
      </Div>
      <DivPagination>
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePagination={handlePages}
        />
      </DivPagination>
    </>
  )
}

export default ProductCardList

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const DivPagination = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`
