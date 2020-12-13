import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`

const StyledAsset = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: ${({ background }) => background};
`

const setProperties = (contentRef, assetRef, containerHeight, top, height) => {
  if (contentRef.current) contentRef.current.style.height = `${containerHeight}vh`
  if (assetRef.current) {
    assetRef.current.style.top = `${top}vh`
    assetRef.current.style.opacity = top > height ? 0 : 1
  }
}

export const SceneContainer = ({ initialPosition, height = 100, background, children }) => {
  const contentRef = useRef()
  const assetRef = useRef()

  const handleScroll = () => {
    const scrollPosition = window.scrollY / window.innerHeight * 100
    const containerHeight = Math.max(scrollPosition - initialPosition + 100, 0)
    const top = containerHeight - 100
    setProperties(contentRef, assetRef, containerHeight, top, height)
  }
  useLayoutEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <StyledContent ref={contentRef}>
      <StyledAsset ref={assetRef} background={background}>
        {children}
      </StyledAsset>
    </StyledContent>
  )
}
