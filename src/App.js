import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Header } from './commons/Header'
import { Home } from './pages/home/Home'
import { fadeInOutAnimation } from './styles/animations/FadeInOut'
import { Valley } from './pages/valley/Valley'
import { routes } from './pages/routes'

const theme = {
  // color: {
  //   darkest: '#04080F',
  //   dark: '#507DBC',
  //   main: '#A1C6EA',
  //   light: '#BBD1EA',
  //   lightest: '#DAE3E5',
  // },
  color: {
    darkest: '#04080F',
    dark: '#2B2D42',
    main: '#8D99AE',
    light: '#F8F32B',
    lightest: '#DAE3E5',
  },
  borderRadius: '0.6rem',
  fadeInOut: fadeInOutAnimation
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Switch>
          <Route exact path={routes.home}>
            <Header />
            <Home />
          </Route>
          <Route exact path={routes.valley}>
            <Valley />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>

  )
}

export default App
