import React, { useLayoutEffect, useState } from 'react'
import { Video } from './Story/Video'
import { SceneContainer } from './SceneContainer'
import { Scene } from './Story/Scene'
import { Title } from './Story/Title'
import { Header } from './Story/Header'
import { Image } from './Story/Image'
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
import video1 from '../../assets/videos/1.mp4'
import video2 from '../../assets/videos/2.mp4'
import video3 from '../../assets/videos/3.mp4'
import video4 from '../../assets/videos/4.mp4'
import video5 from '../../assets/videos/5.mp4'
import video6 from '../../assets/videos/6.mp4'
import video7 from '../../assets/videos/7.mp4'
import video8 from '../../assets/videos/8.mp4'
import video9 from '../../assets/videos/9.mp4'
import video10 from '../../assets/videos/10.mp4'
import video11 from '../../assets/videos/11.mp4'
import video12 from '../../assets/videos/12.mp4'
import video13 from '../../assets/videos/13.mp4'


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
          <Video src={video1} playing={scrollPosition > 100 && scrollPosition < 150} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={400}>
          <Image src={photo2} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={500} height={150} background={'#FF4F17'}>
          <Video src={video2} playing={scrollPosition > 500 && scrollPosition < 650} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={800}>
          <Image src={photo3} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={900} height={150} background={'#FF4F17'}>
          <Video src={video3} playing={scrollPosition > 900 && scrollPosition < 1050} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1200}>
          <Image src={photo4} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1300} height={150} background={'#FF4F17'}>
          <Video src={video4} playing={scrollPosition > 1300 && scrollPosition < 1450} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1600}>
          <Image src={photo5} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={1700} height={150} background={'#FF4F17'}>
          <Video src={video5} playing={scrollPosition > 1700 && scrollPosition < 1850} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2000}>
          <Image src={photo6} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2100} height={150} background={'#FF4F17'}>
          <Video src={video6} playing={scrollPosition > 2100 && scrollPosition < 2250} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2400}>
          <Image src={photo7} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2500} height={150} background={'#FF4F17'}>
          <Video src={video7} playing={scrollPosition > 2500 && scrollPosition < 2650} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2800}>
          <Image src={photo8} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={2900} height={150} background={'#FF4F17'}>
          <Video src={video8} playing={scrollPosition > 2900 && scrollPosition < 3050} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={3200}>
          <Image src={photo9} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={3300} height={150} background={'#FF4F17'}>
          <Video src={video9} playing={scrollPosition > 3300 && scrollPosition < 3450} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={3600}>
          <Image src={photo10} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={3700} height={150} background={'#FF4F17'}>
          <Video src={video10} playing={scrollPosition > 3700 && scrollPosition < 3850} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={4000}>
          <Image src={photo11} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={4100} height={150} background={'#FF4F17'}>
          <Video src={video11} playing={scrollPosition > 4100 && scrollPosition < 4250} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={4400}>
          <Image src={photo12} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={4500} height={150} background={'#FF4F17'}>
          <Video src={video12} playing={scrollPosition > 4500 && scrollPosition < 4650} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
      <Scene>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={4800}>
          <Image src={photo13} />
        </SceneContainer>
      </Scene>
      <Scene height={150}>
        <SceneContainer scrollPosition={scrollPosition} initialPosition={4900} height={150} background={'#FF4F17'}>
          <Video src={video13} playing={scrollPosition > 4900 && scrollPosition < 5050} />
        </SceneContainer>
      </Scene>
      <Scene height={150} background={'white'}>
      </Scene>
    </>
  )
}
