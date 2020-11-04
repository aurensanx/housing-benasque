import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './commons/Header'
import { Home } from './pages/home/Home'
import { fadeInOutAnimation } from './styles/animations/FadeInOut'

const theme = {
  primaryColor: '#1abc9c',
  borderRadius: '0.6rem',
  fadeInOut: fadeInOutAnimation
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
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
    </ThemeProvider>

  )
}

export default App
