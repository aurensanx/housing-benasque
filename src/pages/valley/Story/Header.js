import { Text } from '../../../commons/layout/Text'
import { routes } from '../../routes'
import React, { useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from '../../../commons/layout/Flex'
import { ReactComponent as ArrowDown } from '../../../assets/svg/arrowDown.svg'
import { Link } from 'react-router-dom'

const FlexCornerText = styled(Flex)`
  position: absolute;
  padding: 1rem 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`

const rightStyles = css`
  text-align: end;
`

const StyledArrow = styled(ArrowDown)`
  position: absolute;
  left: 50%;
  bottom: 15px;
`

const flexStyles = css`
  flex: 1;
`

const StyledLink = styled(Link)`
  ${flexStyles}
`

const topContainerStyles = css`
  top: 0;
`

const bottomContainerStyles = css`
  position: absolute;
  bottom: 0;
`

export const Header = () => {
  const ref = useRef()

  const handleScroll = () => {
    ref.current.style.opacity = 1 - window.scrollY / window.innerHeight
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <FlexCornerText ref={ref} styles={topContainerStyles}>
        <Text bold size={12} uppercase styles={flexStyles}>17 de agosto de 2020</Text>
        <StyledLink to={routes.home}>
          <Text center variant='h2' size={28} shadow>Valle de Ordesa</Text>
        </StyledLink>
        <Text bold size={12} uppercase styles={[flexStyles, rightStyles]}>3355 metros</Text>
      </FlexCornerText>
      <FlexCornerText styles={bottomContainerStyles}>
        <StyledArrow />
        <div />
        <Text bold size={12} uppercase>Foto de Guille Fillat</Text>
      </FlexCornerText>
    </>
  )
}
