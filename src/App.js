import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './commons/Header'
import { Home } from './pages/home/Home'
import { fadeInOutAnimation } from './styles/animations/FadeInOut'
import { Valley } from './pages/valley/Valley'
import { routes } from './pages/routes'

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
          <Route exact path={routes.home}>
            <Home />
          </Route>
          <Route exact path={routes.valley}>
            <Valley />
          </Route>
          {/*<Route path="/dashboard">*/}
          {/*  <Dashboard />*/}
          {/*</Route>*/}
        </Switch>
      </Router>
    </ThemeProvider>

  )
}

export default App
