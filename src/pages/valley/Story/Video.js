import React, { useRef } from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
  position: absolute;
  object-fit: contain;
  height: 90vh;
  top: 5vh;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`

export const Video = ({ src, playing }) => {
  const videoRef = useRef()
  if (playing && videoRef.current && videoRef.current.paused) {
    videoRef.current.play()
  }
  if (!playing && videoRef.current && !videoRef.current.paused) {
    videoRef.current.pause()
  }
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
