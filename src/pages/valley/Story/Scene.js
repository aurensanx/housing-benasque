import React from 'react'
import styled from 'styled-components'

const StyledScene = styled.div`
  position: relative;
  height: ${({ height }) => height}vh;
  ${({ background }) => background && `background: ${background}`};
`

export const Scene = ({ height, background, children }) => (
  <StyledScene height={height} background={background}>
    {children}
  </StyledScene>
)
