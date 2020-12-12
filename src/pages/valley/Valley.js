import React from 'react'
import { Scene } from './Story/Scene'
import { Title } from './Story/Title'
import { Header } from './Story/Header'
import { VideoScene } from './Story/VideoScene'
import { ImageScene } from './Story/ImageScene'
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

export const Valley = () => (
  <>
    <ImageScene src={photo1} initialPosition={0}>
      <Header />
      <Title />
    </ImageScene>
    <VideoScene src={video1} initialPosition={100} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo2} initialPosition={400} />
    <VideoScene src={video2} initialPosition={500} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo3} initialPosition={800} />
    <VideoScene src={video3} initialPosition={900} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo4} initialPosition={1200} />
    <VideoScene src={video4} initialPosition={1300} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo5} initialPosition={1600} />
    <VideoScene src={video5} initialPosition={1700} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo6} initialPosition={2000} />
    <VideoScene src={video6} initialPosition={2100} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo7} initialPosition={2400} />
    <VideoScene src={video7} initialPosition={2500} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo8} initialPosition={2800} />
    <VideoScene src={video8} initialPosition={2900} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo9} initialPosition={3200} />
    <VideoScene src={video9} initialPosition={3300} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo10} initialPosition={3600} />
    <VideoScene src={video10} initialPosition={3700} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo11} initialPosition={4000} />
    <VideoScene src={video11} initialPosition={4100} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo12} initialPosition={4400} />
    <VideoScene src={video12} initialPosition={4500} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo13} initialPosition={4800} />
    <VideoScene src={video13} initialPosition={4900} />
    <Scene height={150} background={'white'} />
  </>
)

