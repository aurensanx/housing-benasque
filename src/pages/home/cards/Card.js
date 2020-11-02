import React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../commons/layout/Text'

const ImgContainer = styled.div`
  width: 100%;
  margin: 1rem 0.5rem;
  padding: 4rem 0.5rem;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  background-image: url(${({ image }) => image});
  background-size: cover;
  border-radius: ${props => props.theme.borderRadius};
  background-position: center;
  :hover {
    cursor: pointer;
  }
`

const textStyles = css`
  color: white;
  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
  font-weight: 500;
`

export const Card = ({ image, text }) => (
  <ImgContainer image={image}>
    <Text center size={24} styles={textStyles}>{text}</Text>
  </ImgContainer>

)
