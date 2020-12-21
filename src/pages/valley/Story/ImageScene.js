import React from 'react'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Scene'
import { Image } from './Image'

export const ImageScene = ({ src, height = 100, children }) => {
  const renderScene = initialPosition => (
    <SceneContainer initialPosition={initialPosition} height={height}>
      <Image src={src} />
      {children}
    </SceneContainer>
  )
  return (
    <Scene height={height}>
      {renderScene}
    </Scene>
  )
}
