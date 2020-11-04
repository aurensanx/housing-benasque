import React from 'react'
import { css } from 'styled-components'
import { Flex } from './layout/Flex'
import { Text } from './layout/Text'

const containerStyles = css`
  background: ${props => props.theme.primaryColor};
  color: white;
  font-size: 1rem;
`

const titleStyles = css`
  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
  padding: 1rem;
  @media (max-width: 48rem) {
    padding: 0.5rem;
  }
`

const Header = () => (
  <Flex center styles={containerStyles}>
    <Text center variant='h2' size={28} styles={titleStyles}>Header</Text>
  </Flex>
)

export { Header }
