import React from 'react'
import { SceneContainer } from './SceneContainer'
import { Video } from './Video'
import { Scene } from './Scene'

export const VideoScene = ({ src, initialPosition, height = 150 }) => (
  <Scene height={height}>
    <SceneContainer initialPosition={initialPosition} height={height} background={'#FF4F17'}>
      <Video src={src} initialPosition={initialPosition} />
    </SceneContainer>
  </Scene>
)

