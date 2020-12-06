import React from 'react'
import { css } from 'styled-components'
import { Text } from '../../commons/layout/Text'

const titleStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  transition: opacity 0.3s;
`

export const Title = () => (
  <Text center variant='h2' size={40} shadow styles={titleStyles}>Mi ascenso a Monte Perdido</Text>
)
