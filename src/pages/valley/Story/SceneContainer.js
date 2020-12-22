import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transform: translateZ(0);
`

const StyledAsset = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: ${({ background }) => background};
`

const setProperties = (contentRef, assetRef, containerHeight, top, height) => {
  if (top < height + 20) {
    if (contentRef.current) contentRef.current.style.height = `${containerHeight}vh`
    if (assetRef.current) {
      assetRef.current.style.top = `${top}vh`
      assetRef.current.style.display = top > height || top === -100 ? 'none' : 'block'
    }
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
  // useLayoutEffect(() => {
  //   window.addEventListener('resize', handleScroll)
  //   return () => window.removeEventListener('resize', handleScroll)
  // })
  return (
    <StyledContent ref={contentRef}>
      <StyledAsset ref={assetRef} background={background}>
        {children}
      </StyledAsset>
    </StyledContent>
  )
}
