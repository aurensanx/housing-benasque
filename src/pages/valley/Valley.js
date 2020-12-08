import React from 'react'
import { Video } from './Story/Video'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Story/Scene'
import { Title } from './Story/Title'
import { Header } from './Story/Header'
import photo1 from '../../assets/images/perdido/1.jpeg'
import photo2 from '../../assets/images/perdido/2.jpeg'
import { Image } from './Story/Image'


// https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4

export const Valley = () => {

  return (
    <>
      <Scene height={100}>
        <SceneContainer initialPosition={0} height={100}>
          <Header photo={photo1} />
          <Title />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer background={'#FF4F17'} initialPosition={100} height={150}>
          <Video />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene height={100}>
        <SceneContainer initialPosition={400} height={100}>
          <Image src={photo2} />
        </SceneContainer>
      </Scene>
    </>
  )
}
