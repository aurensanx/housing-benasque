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

const Header = () => (
  <HeaderContainer>
    <h2 styles={{'text-align': 'justify'}}>Encuentra tu piso ideal en Benasque</h2>
    <p>Guillermo Fillat te ayuda</p>
  </HeaderContainer>
)

export {Header}
