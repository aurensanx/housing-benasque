import React from 'react'
import { Flex } from '../../commons/layout/Flex'
import { ImageFadeInOut } from './image/ImageFadeInOut'
import { CardContainer } from './cards/CardContainer'
import { css } from 'styled-components'

const containerStyles = css`
  margin: 0 1rem;
`
export const Home = () => (
  <Flex center styles={containerStyles}>
    <ImageFadeInOut />
    <CardContainer />
  </Flex>
)
