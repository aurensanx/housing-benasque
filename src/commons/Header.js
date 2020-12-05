import React from 'react'
import { css } from 'styled-components'
import { Flex } from './layout/Flex'
import { Text } from './layout/Text'

const containerStyles = css`
  background: ${({ theme }) => theme.color.dark};
  color: white;
  font-size: 1rem;
`

const titleStyles = css`
  padding: 1rem;
  @media (max-width: 48rem) {
    padding: 0.5rem;
  }
`

const Header = () => (
  <Flex center styles={containerStyles}>
    <Text center variant='h2' size={28} shadow styles={titleStyles}>Apartamentos Fillat</Text>
  </Flex>
)

export { Header }
