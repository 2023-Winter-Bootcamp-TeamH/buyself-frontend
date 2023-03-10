import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai'
import Webcam from 'react-webcam'
import Loading from './Loading'
import { BuyCardProps } from '../scan/BuyList'
import { customAxios } from './CustomAxios'
import { store, addProduct } from '../../store'

const Modal = ({ onClose }: { onClose: () => void }) => {
  const [isLoading, setLoading] = useState(false)
  const webcamRef = useRef<Webcam>(null)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()
      setImgSrc(imageSrc)
      dataUrlToFile(imageSrc)
    }
  }, [webcamRef, setImgSrc])

  const predict = () => {
    if (file) {
      setLoading(true)
      const fileData = new FormData()
      fileData.append('file', file)
      customAxios
        .post<BuyCardProps[]>('/predict', fileData)
        .then((res) => {
          setLoading(false)
          res.data.map((v) =>
            store.dispatch(
              addProduct({
                id: v.id,
                class_name: v.class_name,
                price: v.price,
                count: 1,
                img_url: v.img_url,
              })
            )
          )
          handleClose()
        })
        .catch((err) => {
          alert('상품 인식에 실패하였습니다. 다시 시도해주세요.')
          console.log(err)
          setLoading(false)
        })
    }
  }

  const handleClose = () => {
    setLoading(false)
    onClose?.()
  }

  const dataUrlToFile = async (dataUrl: string | null) => {
    if (dataUrl) {
      const res = await fetch(dataUrl)
      const blob = await res.blob()
      const file = new File([blob], 'image', { type: 'image/jpeg' })
      setFile(file)
    }
  }

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <Overlay>
        <ModalWrap>
          <CloseButton
            onClick={() => {
              handleClose()
            }}
          >
            <AiOutlineClose />
          </CloseButton>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            style={{ width: '100%', borderRadius: '1.5rem', margin: '0' }}
          />
          {imgSrc && <Image src={imgSrc} />}
          <Button
            onClick={() => {
              capture()
            }}
          >
            <AiOutlineCamera />
          </Button>
          <ComplteButton
            onClick={() => {
              predict()
            }}
          >
            완료
          </ComplteButton>
        </ModalWrap>
      </Overlay>
    )
  }
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`

const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  border-radius: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }
  @media all and (max-width: 767px) {
    width: 95%;
  }
`

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  z-index: 999;
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  margin: 1.5rem;
  border-radius: 5rem;
  color: white;
  font-size: 1.5rem;
  background-color: #ff6060;
  cursor: pointer;
  box-shadow: inset 2px 2px 10px 0 rgba(255, 255, 255, 0.5),
    4px 4px 5px 0 rgba(0, 0, 0, 0.5), -2px -2px 10px 0 rgba(255, 255, 255, 0.5);
`

const Button = styled(CloseButton)`
  bottom: 0;
  width: 3rem;
  right: 6.5rem;
  font-size: 2rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
`

const ComplteButton = styled(Button)`
  font-size: 1.2rem;
  right: 0;
`

const Image = styled.img`
  width: 100%;
  height: fit-content;
  border-radius: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900;
`
