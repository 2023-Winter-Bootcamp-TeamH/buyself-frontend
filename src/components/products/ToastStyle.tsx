import React from 'react'
import styled, { css, keyframes } from 'styled-components'

/** 상품 등록 확인 메세지 출력 레이아웃 */

export const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`
export const fadeout = keyframes`
  0% { top: -30px; opacity: 1; } 
  100% { top: 0px; opacity: 0; }
`

interface SnackbarProps {
  show: boolean
}

export const Snackbar = styled.div<SnackbarProps>`
  z-index: 100;
  position: fixed;
  margin-top: 43rem;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  background-color: #333;
  color: #fff;
  align-items: flex-end;
  justify-content: center;
  border-radius: 1.5rem;
  padding: 0.5rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  font-size: 1.2rem;
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ''};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ''};
  animation-fill-mode: forwards;
`
