import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
`

export const Image = ({ src }) => (
  <StyledImage src={src} />
)
