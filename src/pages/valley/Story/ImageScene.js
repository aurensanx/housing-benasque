import React from 'react'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Scene'
import { Image } from './Image'

export const ImageScene = ({ src, children }) => {
  const renderScene = initialPosition => (
    <SceneContainer initialPosition={initialPosition}>
      <Image src={src} />
      {children}
    </SceneContainer>
  )
  return (
    <Scene height={100}>
      {renderScene}
    </Scene>
  )
}
