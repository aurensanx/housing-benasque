import React from 'react'
import styled, { css } from 'styled-components'

const StyledVideo = styled.video`
  position: absolute;
  object-fit: contain;
  height: 90vh;
  top: 5vh;
  width: calc(100% - 40px);
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`

export const Video = () => (
  <StyledVideo preload="auto"
         id="video_1606928977083"
         loop="loop"
         playsInline="playsinline"
         src="https://int.nyt.com/data/videotape/finished/2020/09/1600804434/cuties-900w.mp4" />

)
