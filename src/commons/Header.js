import React from 'react'
import { css } from 'styled-components'
import { Flex } from './layout/Flex'
import { Text } from './layout/Text'

const containerStyles = css`
  background: var(--main-color);
  color: white;
  font-size: 1rem;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
`

const titleStyles = css`
  padding: 1rem;
  @media (max-width: 48rem) {
    padding: 0.5rem;
  }
`

const subtitleStyles = css`
  padding-bottom: 1rem;
  @media (max-width: 48rem) {
    padding-bottom: 0.5rem;
  }
`

const Header = () => (
  <Flex center styles={containerStyles}>
    <Text center variant='h2' styles={titleStyles}>Encuentra tu piso ideal en Benasque</Text>
    <Text center styles={subtitleStyles}>Guillermo Fillat te ayuda</Text>
  </Flex>
)

export { Header }
