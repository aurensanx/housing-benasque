import React from 'react'
import styled, { css } from 'styled-components'
import carousel1 from '../../../assets/images/carousel/1.jpg'
import carousel2 from '../../../assets/images/carousel/2.jpg'
import carousel3 from '../../../assets/images/carousel/3.jpg'
import carousel4 from '../../../assets/images/carousel/4.jpg'
import carousel5 from '../../../assets/images/carousel/5.jpg'
import carousel6 from '../../../assets/images/carousel/6.jpg'


const transition = 2;
const duration = 5;

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
]

const ImgContainer = styled.div`
  margin: 2rem 0;
  position: relative;
  width: 80%;
  @media only screen and (max-width: 48rem) {
    width: 100%;
    margin: 1.5rem;
  }
`

const topStyles = css`
  position: relative;
`

const bottomStyles = css`
  position: absolute;
`

const StyledImg = styled.img`
  width: 100%;
  transition: opacity ${transition}s ease-in-out;
  ${({ theme, index }) => theme.fadeInOut(index, images.length, transition, duration)}
  box-shadow: 5px 5px 5px #aaa;
 
  ${({ styles }) => styles}
  border-radius: ${props => props.theme.borderRadius}; 
`


export const ImageFadeInOut = () => (
  <ImgContainer>
    {images.map((image, i) => <StyledImg key={i} index={i} styles={i === images.length - 1 ? topStyles : bottomStyles} src={image} />)}
  </ImgContainer>
)
