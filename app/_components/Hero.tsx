import React from 'react'
import Button from '../_components/Button'
import Link from 'next/link'
import { Download } from 'lucide-react';
import Image from 'next/image';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';

const Hero = ({value}:any) => {
  return (
    <div className='py-40 md:py-40 relative  flex items-center justify-center bg-gray-300/5'>
        {/* < Image src='/grid-final.png' priority width={500} height={500} className='object-cover md:object-fill w-full h-screen absolute top-0 z-[-1] opacity-[0.06] ' alt='grid'></Image> */}
        <BackgroundRippleEffect/>
        {/* Hero-content */}
        <div className='text-white flex flex-col justify-center items-center gap-4 md:gap-5 text-cente w-full'>
            <h2 className='primary font-medium md:text-lg z-10'>Based in India</h2>
            <div className=' md:w-[60%] h-auto pb-4 md:pb-4 flex flex-col '>
              <TextGenerateEffect words="Crafting Creative &"  className="text-4xl md:text-8xl lg:text-[10rem] text-center primary z-10" />
              <TextGenerateEffect words="Functional Web Solutions"  className="text-4xl md:text-8xl lg:text-[10rem]  text-center primary z-10" />
            </div>
            {/* <h1 className='text-4xl md:text-6xl lg:text-[3.85rem] font-semibold w-3/4 md:w-1/2 text-center leading-snug md:leading-snug'>Building Creative & Functional <span className='primary'>Web Solution</span></h1> */}
            <p className='secondary md:text-lg w-[90%] text-center md:w-[40%] z-10'>We are a web agency crafting creative, seamless, and high-impact digital experiences that elevate brands and drive engagement.</p>

            {/* Hero-button */}
            <div className='flex  md:flex-row  items-center gap-1 md:gap-2 mt-5 md:mt-4 z-10'>
            <Link href='/projects'  ><Button value="Our Work"></Button></Link>
            <Link href='/contact'  className='flex justify-center gap-4 px-3 py-2 md:px-6 md:py-3 text-md rounded-xl text-gray-300 hover:text-white border border-gray-800'><h1>Get in Touch</h1></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero