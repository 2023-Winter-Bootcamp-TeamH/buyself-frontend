import React from 'react'
import styled from 'styled-components'

const ChecklistBox = () => {
  return <ChecklistBoxLayout></ChecklistBoxLayout>
}

export default ChecklistBox

const ChecklistBoxLayout = styled.div`
  width: 80%;
  height: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 1.5rem;
  margin-bottom: 4rem;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
`
