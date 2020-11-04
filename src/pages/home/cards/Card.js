import React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../commons/layout/Text'

const ImgContainer = styled.div`
  margin: 0 0.5rem;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 48rem) {
    margin: 0.25rem 0;
  }
  padding: 4rem 0.5rem;
  @media (max-width: 48rem) {
    padding: 2rem 0.5rem;
  }
  flex: 1 1 33%;

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
  <ImgContainer image={process.env.PUBLIC_URL + image}>
    <Text center size={24} variant='h2' styles={textStyles}>{text}</Text>
  </ImgContainer>

)
