import React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../commons/layout/Text'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  margin: 0 0.5rem;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 48rem) {
    margin: 0.5rem 0;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
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
`

export const Card = ({ image, text, url }) => (
  <StyledLink to={url} image={image}>
      <Text center size={24} variant='h2' bold shadow styles={textStyles}>{text}</Text>
  </StyledLink>

)
