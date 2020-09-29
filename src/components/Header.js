import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1abc9c;
  color: white;
  font-size: 1rem;
`

const StyledText = styled.h2`
  text-align: center;
`

const Header = () => (
  <HeaderContainer>
    <StyledText>Encuentra tu piso ideal en Benasque</StyledText>
    <p>Guillermo Fillat te ayuda</p>
  </HeaderContainer>
)

export {Header}
