import React, { useLayoutEffect, useState } from 'react'
import { Video } from './Story/Video'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Story/Scene'
import { Title } from './Story/Title'
import { Header } from './Story/Header'
import photo1 from '../../assets/images/perdido/1.jpeg'
import photo2 from '../../assets/images/perdido/2.jpeg'
import { Image } from './Story/Image'

const video = 'https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4'

export const Valley = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    setScrollPosition(window.scrollY / window.innerHeight * 100)
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition}>
          <Image src={photo1} />
          <Header />
          <Title />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={100} height={150} background={'#FF4F17'}>
          <Video src={video} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={400}>
          <Image src={photo2} />
        </SceneContainer>
      </Scene>
    </>
  )
}
