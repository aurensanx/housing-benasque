import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../../commons/layout/Text'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;
  transition: opacity 0.5s;
  ${({ opacity }) => opacity === 0 && 'opacity: 0;'}
`

export const Title = () => {

  const ref = useRef()
  const [opacity, setOpacity] = useState(1)

  const handleScroll = () => {
    const scrollPosition = window.scrollY / window.innerHeight * 100
    if (scrollPosition > 25 && opacity === 1) {
      setOpacity(0)
    } else if (scrollPosition <= 25 && opacity === 0) {
      setOpacity(1)
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <StyledContainer opacity={opacity}>
      <Text ref={ref} center variant='h2' size={60} shadow>Mi ascenso a Monte Perdido 3</Text>
    </StyledContainer>

  )
}
