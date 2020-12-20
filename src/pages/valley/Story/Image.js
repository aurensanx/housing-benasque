import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Image = ({ src }) => (
  <StyledImage src={src} />
)
