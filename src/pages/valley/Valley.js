import React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../commons/layout/Text'
import { Header } from './Header'

const StyledSlide = styled.div`
  height: 190vh;
`

const titleStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-center: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`

export const Valley = () => (
  <StyledSlide>
    <Header />
    <Text center variant='h2' size={40} shadow styles={titleStyles}>Descubre el valle de Benasque</Text>
  </StyledSlide>
)
