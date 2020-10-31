import React from 'react'
import styled from 'styled-components'
import './styles/variables.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './commons/Header'
import { Home } from './pages/home/Home'

const AppWrapper = styled.div`
  padding: 1rem 2rem;
  @media (max-width: 48rem) {
    padding: 0.5rem 1rem;
  }
`

function App() {
  return (
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
  )
}

export default App
