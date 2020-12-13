import React from 'react'
import { Scene } from './Scene'
import { Text } from '../../../commons/layout/Text'
import styled, { css } from 'styled-components'

const StyledTextContainer = styled.div`
  background: #fff;
  position: relative;
  z-index: 10;
  padding: 80px 0;
  @media (min-width: 1024px) {
    padding: 150px 0;
  }
`

const textStyles = css`
  font-family: georgia, "times new roman", times, serif;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  letter-spacing: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  
  @media (min-width: 740px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }

  width: calc(100% - 40px);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: calc(25px / 2);

  @media (min-width: 740px) {
    margin-bottom: calc(30px / 2);
  }
`

export const TextScene = ({ text }) => {
  const renderText = () => (
    <StyledTextContainer>
      {text.map((t, i) => <Text key={i} variant='p' styles={textStyles}>{t}</Text>)}
    </StyledTextContainer>
  )
  return (
    <Scene background={'white'}>
      {renderText}
    </Scene>
  )
}

