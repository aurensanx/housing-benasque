import React, { useLayoutEffect, useRef } from 'react'
import { css } from 'styled-components'
import { Flex } from '../../../commons/layout/Flex'
import { Text } from '../../../commons/layout/Text'

const scrollTextStyles = css`
  z-index: 10;
  padding-left: 100vw;
  box-sizing: border-box;
  position: absolute;
  top: 50%;

  span {
    padding-left: 10vw;
    white-space: nowrap;
    color: #fff;
    font-size: 45px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    letter-spacing: -0.5px;
    @media (min-width: 1024px) {
      font-size: 60px;
    }
  }
`

export const ScrollText = ({ src, initialPosition }) => {
  const ref = useRef()
  let pct = 0.4

  const handleScroll = () => {
    const scrollPosition = (window.scrollY - initialPosition) / window.innerHeight - 0.6
    if (scrollPosition > pct) {
      const p = (scrollPosition - pct) / (1 - pct)
      ref.current.style.transform = `translate3d(${-(p) * 100}%, 0,0)`
    }
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <Flex styles={scrollTextStyles} ref={ref}><Text variant='span'>Esto es un texto</Text></Flex>
  )
}
