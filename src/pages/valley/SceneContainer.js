import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

const StyledScene = styled.div`
  position: relative;
  height: ${({ height }) => height}vh;
`

const StyledContent = styled.div.attrs(props => ({
  style: {
    height: `${props.height}vh`,
  },
}))`
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`

const StyledAsset = styled.div
.attrs(props => ({
  style: {
    top: `${props.height}vh`,
  },
}))
  `
  position: absolute;
  height: 100vh;
  width: 100%;

`

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  //background: ${({ background }) => background};
`

const StyledVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
`

export const SceneContainer = ({ height, background, children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  console.log(scrollPosition)
  const handleScroll = () => {
    const position = window.scrollY / window.innerHeight * 100
    // TODO
    if (position < 150) {
      setScrollPosition(position)
    }

  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <StyledScene background={background} height={height} >
      <StyledContent height={scrollPosition}>
        <StyledAsset height={scrollPosition-100}>
          <StyledDiv background={background}>
            <StyledVideo background={background}>
              {children}
            </StyledVideo>
          </StyledDiv>
        </StyledAsset>
      </StyledContent>
    </StyledScene>
)}
