import { Flex } from '../../../commons/layout/Flex'
import { Card } from './Card'
import React from 'react'
import { css } from 'styled-components'

const cardContainerStyles = css`
  width: 100%;
  margin: 0 2rem 2rem 2rem;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

const cards = [
  {text: 'Quiénes somos', image: '/images/people.jpg'},
  {text: 'Nuestros apartamentos', image: '/images/apartments.jpg'},
  {text: 'Conoce el valle', image: '/images/valley.jpg'},
]

export const CardContainer = () => (
  <Flex styles={cardContainerStyles}>
    {cards.map(({ text, image }, i) => <Card key={i} text={text} image={image} />)}
  </Flex>
)
