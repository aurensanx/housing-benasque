import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Image = ({ src }) => (
  <StyledContainer>
    <StyledImage src={src} />
  </StyledContainer>
)
