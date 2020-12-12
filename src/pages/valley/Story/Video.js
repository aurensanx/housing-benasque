import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
  position: absolute;
  object-fit: contain;
  height: 90vh;
  top: 5vh;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`

export const Video = ({ src, initialPosition }) => {
  const videoRef = useRef()

  const handleScroll = () => {
    const scrollPosition = window.scrollY / window.innerHeight * 100
    const isPlaying = scrollPosition > initialPosition && scrollPosition < initialPosition + 50
    if (isPlaying && videoRef.current && videoRef.current.paused) {
      videoRef.current.play()
    }
    if (!isPlaying && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause()
    }
  }
  // useLayoutEffect(() => {
  //   const currentRef = videoRef.current
  //   handleScroll(currentRef)
  //   currentRef.addEventListener('scroll', e => handleScroll(e.target))
  //   return () => {
  //     currentRef.removeEventListener('scroll', e => handleScroll(e.target))
  //   }
  // })
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <StyledVideo
      ref={videoRef}
      preload="auto"
      id="video_1606928977083"
      loop="loop"
      playsInline="playsinline"
      autoplay="true"
      muted="muted"
      src={src} />

  )
}
