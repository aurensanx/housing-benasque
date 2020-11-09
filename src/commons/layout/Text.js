import React from 'react'
import styled, { css } from 'styled-components'

const centerTextStyles = css`
  text-align: center;
`
const capitalizeStyles = css`
  text-transform: capitalize;
`
const uppercaseStyles = css`
  text-transform: uppercase;
`
const boldStyles = css`
  font-weight: bold;
`
const shadowStyles = css`
  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
`

const StyledText = styled.p`
  margin: 0;
  color: white;
  transition: all 0.1s ease-in-out;
  font-size: ${({ size }) => size ? size + 'px' : '1rem'};
  ${({ center }) => center && centerTextStyles}
  ${({ capitalize }) => capitalize && capitalizeStyles}
  ${({ uppercase }) => uppercase && uppercaseStyles}
  ${({ bold }) => bold && boldStyles}
  ${({ shadow }) => shadow && shadowStyles}
  
  ${({ styles }) => styles}
  
  @media (max-width: 48rem) {
    font-size:  ${({ as }) => as === 'h2' ? '4vw' : '3vw'};
  }
`

export const Text = React.forwardRef((props, ref) => {
  const { variant, ...rest } = props
  return (
    <StyledText
      {...rest}
      ref={ref}
      as={variant}
    />
  )
})
