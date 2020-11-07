import { Flex } from '../../../commons/layout/Flex'
import { Card } from './Card'
import React from 'react'
import { css } from 'styled-components'
import { routes } from '../../routes'
import people from '../../../assets/images/people.jpg'
import apartments from '../../../assets/images/apartments.jpg'
import valley from '../../../assets/images/valley.jpg'

const cardContainerStyles = css`
  width: 100%;
  margin: 0 2rem 2rem 2rem;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

const cards = [
  {text: 'Quiénes somos', image: people, url: ''},
  {text: 'Nuestros apartamentos', image: apartments, url: ''},
  {text: 'Conoce el valle', image: valley, url: routes.valley},
]

export const CardContainer = () => (
  <Flex styles={cardContainerStyles}>
    {cards.map((card, i) => <Card key={i} {...card} />)}
  </Flex>
)
