import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './commons/Header'
import { Home } from './pages/home/Home'
import { fadeInOutAnimation } from './styles/animations/FadeInOut'

const theme = {
  primaryColor: '#1abc9c',
  borderRadius: '0.6rem',
  fadeInOut: fadeInOutAnimation,
}

const AppWrapper = styled.div`
  padding: 1rem 2rem;
  @media (max-width: 48rem) {
    padding: 0.5rem 1rem;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/*<Route path="/about">*/}
            {/*  <About />*/}
            {/*</Route>*/}
            {/*<Route path="/dashboard">*/}
            {/*  <Dashboard />*/}
            {/*</Route>*/}
          </Switch>
        </Router>
      </AppWrapper>
    </ThemeProvider>

  )
}

export default App
