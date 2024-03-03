"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';


const Herocontent = () => {
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
            <h1 className='Welcome-text text-[13px]'>Computer Science Portfolio </h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
                <span>
                Providing
                <span className="bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4285F4, #00FFFF)', color: 'rgba(0, 0, 0, 0.5)' }}> the best </span>
                project exprience
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
            className="py-2 button-primary text-center text-white cursor-pointer-rounded-lg max-w-[200px]"
            >
                <a href="https://github.com/Abdulrehman-codes">Learn More!</a>
            
            </motion.a>
        </div>


        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
        >
           <Image 
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            />
            
        
            
        </motion.div>
    </motion.div>
  )
}

export default Herocontent