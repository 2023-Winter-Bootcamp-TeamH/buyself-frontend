import React, { useEffect } from 'react'

/** 상품 등록 확인 메세지 */

import { Snackbar } from './ToastStyle'
interface ToastProps {
  message: string
  isActive: boolean
  setIsActive: (a: boolean) => void
}

const Toast: React.FC<ToastProps> = ({ message, isActive, setIsActive }) => {
  useEffect(() => {
    if (isActive)
      setTimeout(() => {
        setIsActive(false)
      }, 3000)
  })
  return (
    <>
      {isActive ? (
        <Snackbar show={true}>{message}</Snackbar>
      ) : (
        <Snackbar show={false} />
      )}
    </>
  )
}

export default Toast
