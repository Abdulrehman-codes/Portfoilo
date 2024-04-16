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
        className="custom-video rotate-180 absolute top-[-340px] h-full w-full  left-0 z-[1] object-cover"
        >
            <source src="/blackhole.webm" type="video/webm"  />

        </video>
        <Herocontent />
    </div>
  );
};

export default Hero