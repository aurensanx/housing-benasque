import React from 'react'
import styled, { css } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { Text } from '../../commons/layout/Text'
import { Header } from './Header'
import { Video } from './Video'

export const SceneContainer = styled.div`
  height: ${({ height }) => height}vh;
`


const titleStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  transition: opacity 0.3s;
`

// https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4

export const Valley = () => (
  <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
    <div id='trigger' />
    <SceneContainer height={100} />
    <Scene
      triggerElement='#trigger'
      duration={200}
    >
      {(progress) => (
        <>
          <Header progress={progress}/>
          <Tween
            to={{
              opacity: 0,
            }}
            totalProgress={progress}
            paused
          >
            <Text center variant='h2' size={40} shadow styles={titleStyles}>Mi ascenso a Monte Perdido</Text>
          </Tween>
        </>
      )}
    </Scene>

    <Scene pin>
      <SceneContainer height={150} style={{ background: '#FF4F17'}}>
        <Video />
      </SceneContainer>
    </Scene>
    <Scene pin>
      <SceneContainer height={150} style={{ background: '#736141'}} />
    </Scene>
  </Controller>
)
