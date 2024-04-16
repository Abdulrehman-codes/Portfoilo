"use client"

import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';
import Typed from 'typed.js'



const Herocontent = () => {
    const nameRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(nameRef.current, {
      strings: ['Abdul Rehman.','Data Scientist.','App Developer.','ML Engineer.'],
      typeSpeed: 200,
      backSpeed:50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>

        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[5px] border border-[#00000] opacity-[0.9]'
            >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='Welcome-text text-[13px]'>Data Science Portfolio </h1>
            </motion.div>

            <motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
>
  <span>
    Hi, I am <br />
    <span
      ref={nameRef}
      className="bg-clip-text"
      style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #00FFFF)', color: 'rgba(0, 0, 0, 0.5)' }}
    ></span>
  </span>
</motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
                I am a Computer Science Student currently enrolled in my Final semester of my degree.
                I am currently learning Machine Learning and Data Science and want to pursue my career in this field
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-black cursor-pointer-rounded-lg max-w-[200px]"
            >
                <a href="https://www.linkedin.com/in/abdul-rehman-b28407247/">Learn More!</a>
            
            </motion.a>
        </div>

<div className="image-containerforpic">
  <motion.div
    variants={slideInFromRight(0.8)}
    className="image-content flex justify-center items-center"
  >
    <Image
      src="/image2.png"
      alt="Work icons"
      height={400}
      width={300}
    />
  </motion.div>
</div>
    </motion.div>
  )
}

export default Herocontent