import React from 'react'
import { Header } from './Header'
import { Video } from './Video'
import { SceneContainer } from './SceneContainer'


// https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4

export const Valley = () => {

  return (
    <>
      {/*<Header />*/}
      <div style={{ height: '100vh'}} />
      <SceneContainer height={150} background={'#FF4F17'}>
        <Video />
      </SceneContainer>
      <div style={{ height: '100vh', background: 'white'}} />
      <div style={{ height: '100vh', background: 'white'}} />
      {/*<SceneContainer height={250} background={'#736141'} />*/}
    </>
  )
}
