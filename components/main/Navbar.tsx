import Image from 'next/image';
import React from 'react';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] fixed top-0 shadow-lg shadow-[#e7df8e]/50 bg-slate-300/30 bg-#03001417 backdrop-blur-md z-50'>

      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">

          <Image
          src="/navlogo.png"
          alt="logo"
          width={45}
          height={45}
          className="logo-spin"
          />
          <span className="font-bold ml-[2vw] hidden md:block text-gray-300 ">
            Data Science Chain
          </span>

        </a>
        <div className="flex flex-row md:flex-row md:gap-1">
          <a href="#about-me" className="nav-link">
            <div className="nav nav-link border bg-[#0300145e] px-[2vw] py-[1vh] rounded-full text-gray-200 shadow-md">
              About
            </div>
          </a>
          <a href="#skills" className="nav-link">
            <div className="nav nav-link border bg-[#0300145e] px-[3vw] py-[1vh] rounded-full text-gray-200 shadow-md">
              Skills
            </div>
          </a>
          <a href="#projects" className="nav-link">
            <div className="nav nav-link border bg-[#0300145e] px-[3vw] py-[1vh] rounded-full text-gray-200 shadow-md">
              Projects
            </div>
          </a>
        </div>

        <div className='flex flex-row gap-3'>
          {Socials.map((social) => (
            <a href={social.link} key={social.key} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={24} // Adjust the size as needed
                height={24} // Adjust the size as needed
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
