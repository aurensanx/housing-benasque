import React from 'react'
import { SceneContainer } from './SceneContainer'
import { Video } from './Video'
import { Scene } from './Scene'
import { ScrollText } from './ScrollText'

export const VideoScene = ({ src, height = 150 }) => {
  const renderVideo = initialPosition => (
    <SceneContainer initialPosition={initialPosition} height={height} background={'#FF4F17'}>
      <Video src={src} initialPosition={initialPosition} />
      <ScrollText initialPosition={initialPosition}/>
    </SceneContainer>
  )
  return (
    <Scene height={height}>
      {renderVideo}
    </Scene>
  )
}

