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
  text-decoration: none;
`

const textStyles = css`
  color: white;
  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
  font-weight: 500;
`

export const Card = ({ image, text, url }) => (
  <StyledLink to={url} image={process.env.PUBLIC_URL + image}>
      <Text center size={24} variant='h2' styles={textStyles}>{text}</Text>
  </StyledLink>

)
