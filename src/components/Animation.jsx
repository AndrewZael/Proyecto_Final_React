import React from 'react';
import mp4 from '../assets/video/video.mp4';
import webm from '../assets/video/video.webm';
import ogv from '../assets/video/video.ogv';
import { useEffect } from 'react';

const Animation = () => {
  return (
    <div id='vid' className='video position-absolute w-100'>
      <div className='position-relative overflow-hidden rounded-circle'>
        <video className='w-100 position-absolute' autoPlay={true} muted loop>
            <source src={mp4} type='video/mp4' />
            <source src={webm} type='video/webm' />
            <source src={ogv} type='video/ogv' />
        </video>
      </div>
    </div>
  )
}

export default Animation;
