import React from 'react'
import styled from 'styled-components'
import { BsPlusLg, BsDashLg } from 'react-icons/bs'
import image from '../../images/test_image.png'

const TdProduct = ({
  name,
  price,
  count,
}: {
  name: string
  price: string
  count: number
}) => {
  return (
    <Box>
      <ImageBox>
        <Image src={image} />
      </ImageBox>
      <RightBox>
        {name}
        <CountButton>
          <IconButton>
            <BsDashLg />
          </IconButton>
          {count}
          <IconButton>
            <BsPlusLg />
          </IconButton>
        </CountButton>
      </RightBox>
    </Box>
  )
}

export default TdProduct

const Box = styled.div`
  width: 39%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: white;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  border-right: 0.15rem solid;
  border-bottom: 0;
`
const ImageBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
const RightBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const Image = styled.img`
  width: 10rem;
  height: 70%;
  @media all and (max-width: 767px) {
    width: 4.438rem;
    height: 7.563rem;
    margin-bottom: 0.5rem;
  }
`

const CountButton = styled.button`
  width: 10rem;
  height: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.15rem solid #000000;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`
const IconButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
`
