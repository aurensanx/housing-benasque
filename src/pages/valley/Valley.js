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

const video = 'https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4'

export const Valley = () => (
  <>
    <ImageScene src={photo1}>
      <Header />
      <Title />
    </ImageScene>
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo2} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo3} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo4} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo5} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo6} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo7} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo8} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo9} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo10} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo11} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo12} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
    <ImageScene src={photo13} />
    <VideoScene src={video} />
    <Scene height={150} background={'white'} />
  </>
)

