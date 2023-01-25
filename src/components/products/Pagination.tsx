import React from 'react'
import styled from 'styled-components'

/** 페이지네이션 동작   */

export interface Props {
  page: number
  totalPages: number
  handlePagination: (page: number) => void
}

export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  if (page === 1 && totalPages === 1) {
    return (
      <div>
        <div>
          <button onClick={() => handlePagination(1)} type="button">
            {1}
          </button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Div>
        {page !== 1 && (
          <Button onClick={() => handlePagination(page - 1)} type="button">
            &lt;
          </Button>
        )}
        <Button onClick={() => handlePagination(1)} type="button">
          {1}
        </Button>
        {page === totalPages && totalPages > 3 && (
          <Button onClick={() => handlePagination(page - 2)} type="button">
            {page - 2}
          </Button>
        )}
        {page > 2 && (
          <Button onClick={() => handlePagination(page - 1)} type="button">
            {page - 1}
          </Button>
        )}
        {page !== 1 && page !== totalPages && (
          <Button onClick={() => handlePagination(page)} type="button">
            {page}
          </Button>
        )}
        {page < totalPages - 1 && (
          <Button onClick={() => handlePagination(page + 1)} type="button">
            {page + 1}
          </Button>
        )}
        {page === 1 && totalPages > 3 && (
          <Button onClick={() => handlePagination(page + 2)} type="button">
            {page + 2}
          </Button>
        )}
        {page < totalPages - 2}
        <Button onClick={() => handlePagination(totalPages)} type="button">
          {totalPages}
        </Button>
        {page !== totalPages && (
          <Button onClick={() => handlePagination(page + 1)} type="button">
            &gt;
          </Button>
        )}
      </Div>
    </div>
  )
}
export const Pagination = PaginationComponent

const Div = styled.div`
  display: flex;;
  flex-wrap: nowrap;
  justify-content: center;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 0.3rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.3rem;
  background: white;
  border-radius: 3rem;
  box-shadow: 2px 2px black;
  cursor: pointer;
  @media all and (max-width: 767px) {
    height: 1.5rem;
    width: 1.5rem;
    font-size: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 0.1rem;
    box-shadow: 1px 1px black;
  }
`
