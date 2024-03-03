import Image from 'next/image';
import React from 'react';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#e7df8e]/50 bg-slate-300/30 bg-#03001417 backdrop-blur-md z-50'>

      <div
      className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]"
      >
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">

          <Image
          src="/navlogo.png"
          alt="logo"
          width={50}
          height={50}
          className="logo-spin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 ">
            Data Science Chain
          </span>

        </a>
        <div className="flex flex-row gap-7 ">
          <div className="nav border  bg-[#0300145e] px-[15px] py-[10px] rounded-full text-gray-200 shadow-md">
            <a href="#about-me">
              About me
            </a>
          </div>
          <div className="nav border  bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 shadow-md">
            <a href="#skills" >
              Skills
            </a>
          </div>
          <div className="nav border  bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 shadow-md">
            <a href="#projects">
              Projects
            </a>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
  {Socials.map((social) => (
    <a href={social.link} key={social.key} target="_blank" rel="noopener noreferrer">
      <Image
        src={social.src}
        alt={social.name}
        width={24}
        height={24}
      />
    </a>
  ))}
</div>

      </div>

    </div>
  )
}

export default Navbar