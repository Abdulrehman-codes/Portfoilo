import React from 'react'
import Herocontent from '../sub/Herocontent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'
    id="about-me">

        <video 
        autoPlay
        muted
        loop
        className="custom-video rotate-180 absolute h-full w-full left-0 z-[1] object-cover "
        style={{ zIndex: '-1' }} 
        >
            <source src="/blackhole.webm" type="video/webm"  />

        </video>
        <Herocontent />
    </div>
  );
};

export default Hero