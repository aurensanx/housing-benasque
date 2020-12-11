import React, { useLayoutEffect, useState } from 'react'
import { Video } from './Story/Video'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Story/Scene'
import { Title } from './Story/Title'
import { Header } from './Story/Header'
import photo1 from '../../assets/images/perdido/1.jpg'
import photo2 from '../../assets/images/perdido/2.jpeg'
import photo3 from '../../assets/images/perdido/3.JPG'
import photo4 from '../../assets/images/perdido/4.JPG'
import photo5 from '../../assets/images/perdido/5.JPG'
import photo6 from '../../assets/images/perdido/6.JPG'
import photo7 from '../../assets/images/perdido/7.jpg'
import photo8 from '../../assets/images/perdido/8.JPG'
import photo9 from '../../assets/images/perdido/9.jpg'
import photo10 from '../../assets/images/perdido/10.JPG'
import photo11 from '../../assets/images/perdido/11.JPG'
import photo12 from '../../assets/images/perdido/12.JPG'
import photo13 from '../../assets/images/perdido/13.JPG'
import photo14 from '../../assets/images/perdido/14.JPG'
import video from '../../assets/videos/VID20200816205557.mp4'
import { Image } from './Story/Image'

// const video = 'https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4'
// const video = '../../assets/images/perdido/VID20200816205557.mp4'

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
          <Video src={video} playing={scrollPosition > 100 && scrollPosition < 150} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={400}>
          <Image src={photo2} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={650}>
          <Image src={photo3} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={900}>
          <Image src={photo4} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1150}>
          <Image src={photo5} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1400}>
          <Image src={photo6} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1650}>
          <Image src={photo7} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1900}>
          <Image src={photo8} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2150}>
          <Image src={photo9} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2400}>
          <Image src={photo10} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2650}>
          <Image src={photo11} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2900}>
          <Image src={photo12} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={3150}>
          <Image src={photo13} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={3400}>
          <Image src={photo14} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
    </>
  )
}
