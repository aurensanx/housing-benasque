import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

const StyledContent = styled.div.attrs(props => ({
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
      opacity: `${props.top > props.height ? 0 : 1}`,
    }
  }))
  `
    position: absolute;
    height: 100vh;
    width: 100%;
    background: ${({ background }) => background};

  `

export const SceneContainer = ({ initialPosition = 100, height, background, children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.scrollY / window.innerHeight * 100
    setScrollPosition(Math.max(position - initialPosition + 100, 0))
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <StyledContent height={scrollPosition}>
      <StyledAsset top={scrollPosition - 100} height={height} background={background}>
        {children}
      </StyledAsset>
    </StyledContent>
  )
}
