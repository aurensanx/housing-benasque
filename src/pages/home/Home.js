import React from 'react'
import { Flex } from '../../commons/layout/Flex'
import { ImageFadeInOut } from './image/ImageFadeInOut'
import { CardContainer } from './cards/CardContainer'


export const Home = () => (
  <Flex center>
    <ImageFadeInOut />
    <CardContainer />
  </Flex>
)
