import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div
  .attrs(props => ({
    style: {
      height: `${props.height}vh`
    }
  }))`
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`

const StyledAsset = styled.div
  .attrs(props => ({
    style: {
      top: `${props.top}vh`,
      opacity: `${props.top > props.height ? 0 : 1}`
    }
  }))`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: ${({ background }) => background};
`

export const SceneContainer = ({ scrollPosition, initialPosition = 0, height = 100, background, children }) => {
  const containerHeight = Math.max(scrollPosition - initialPosition + 100, 0)
  const top = containerHeight - 100
  return (
    <StyledContent height={containerHeight}>
      <StyledAsset top={top} height={height} background={background}>
        {children}
      </StyledAsset>
    </StyledContent>
  )
}
