import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
  position: absolute;
  object-fit: contain;
  height: 90vh;
  top: 5vh;
  width: calc(100% - 40px);
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`

export const Video = ({ src }) => (
  <StyledVideo preload="auto"
         id="video_1606928977083"
         loop="loop"
         playsInline="playsinline"
         src={src} />

)
