import React from 'react'
import styled, { css } from 'styled-components'

const centerTextStyles = css`
  text-align: center;
`

const StyledText = styled.p`
  margin: 0;
  transition: all 0.1s ease-in-out;
  font-size: ${({ size }) => size ? size + 'px' : '1rem'};
  ${({ center }) => center && centerTextStyles}
  
  ${({ styles }) => styles}
  
  @media (max-width: 48rem) {
    font-size:  ${({ as }) => as === 'h2' ? '4vw' : '3vw'};
  }
`

export const Text = props => {
  const { variant, ...rest } = props
  return (
    <StyledText
      {...rest}
      as={variant}
    />
  )
}


