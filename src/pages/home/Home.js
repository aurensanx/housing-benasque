import React from 'react'
import { Flex } from '../../commons/layout/Flex'
import styled, { css } from 'styled-components'

const images = [
  'https://loremflickr.com/cache/resized/8677_28008997013_f5d363ae6d_h_1280_800_nofilter.jpg',
  'https://loremflickr.com/cache/resized/3268_2777567783_28015565d8_h_1280_800_nofilter.jpg',
  'https://loremflickr.com/cache/resized/2655_3707286558_bd232e266d_k_1280_800_nofilter.jpg'
]

const ImgContainer = styled.div`
  position: relative;
`

const fadeInOutAnimation = css`
  @keyframes fadeInOutAnimation {
    0% {
      opacity:1;
    }
    40% {
      opacity:1;
    }
    60% {
      opacity:0;
    }
    100% {
      opacity:0;
    }
  }
`

const topStyles = css`
  position: relative;
  
  ${fadeInOutAnimation}
  animation: fadeInOutAnimation 5s ease-in-out infinite alternate;
`

const bottomStyles = css`
  position: absolute;
`

const StyledImg = styled.img`
  width: 100%;
  box-shadow: 5px 5px 5px #aaa;
  transition: opacity 1s ease-in-out;
  ${({ styles }) => styles}
  

  // @keyframes fadeIn {
  //   from {opacity: 1;}
  //   to {opacity: 0;}
  // }
  //
  // animation: fadeIn 4s infinite alternate;

  border-radius: 0.6rem;
  // width: 60%;
  // @media only screen and (max-width: 75rem) {
  //   width: 80%;
  // }
  // @media only screen and (max-width: 48rem) {
  //   width: 100%;
  // }
`

export const Home = () => (
  <Flex center>
    <ImgContainer>
      <StyledImg styles={bottomStyles} src={images[0]} />
      <StyledImg styles={topStyles} src={images[1]} />
    </ImgContainer>
  </Flex>
)
