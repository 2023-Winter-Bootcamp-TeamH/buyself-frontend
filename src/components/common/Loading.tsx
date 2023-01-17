import React from 'react'
import spinner from '../../images/spinner.gif'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Overlay>
      <img src={spinner} width="10%" />
    </Overlay>
  )
}

export default Loading

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99999;
`
