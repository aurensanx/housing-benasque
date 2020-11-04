import { Flex } from '../../../commons/layout/Flex'
import { Card } from './Card'
import React from 'react'
import { css } from 'styled-components'
import { routes } from '../../routes'

const cardContainerStyles = css`
  width: 100%;
  margin: 0 2rem 2rem 2rem;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

const cards = [
  {text: 'Quiénes somos', image: '/images/people.jpg', url: ''},
  {text: 'Nuestros apartamentos', image: '/images/apartments.jpg', url: ''},
  {text: 'Conoce el valle', image: '/images/valley.jpg', url: routes.valley},
]

export const CardContainer = () => (
  <Flex styles={cardContainerStyles}>
    {cards.map((card, i) => <Card key={i} {...card} />)}
  </Flex>
)
