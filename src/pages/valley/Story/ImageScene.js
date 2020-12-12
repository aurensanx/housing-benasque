import React from 'react'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Scene'
import { Image } from './Image'

export const ImageScene = ({ src, initialPosition, children }) => (
  <Scene>
    <SceneContainer initialPosition={initialPosition}>
      <Image src={src} />
      {children}
    </SceneContainer>
  </Scene>
)
