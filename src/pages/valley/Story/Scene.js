import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledScene = styled.div`
  position: relative;
  height: ${({ height }) => height}vh;
  ${({ background }) => background && `background: ${background}`};
`

export const Scene = ({ height, background, children }) => {
  const [initialPosition, setInitialPosition] = useState(undefined)
  const ref = useRef(null)
  useLayoutEffect(() => {
    setInitialPosition(ref.current.getBoundingClientRect().top  / window.innerHeight * 100)
  }, [setInitialPosition])
  return (
    <StyledScene ref={ref} height={height} background={background}>
      {children && children(initialPosition)}
    </StyledScene>
  )
}
