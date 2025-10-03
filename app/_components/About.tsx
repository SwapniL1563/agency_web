import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className=' flex justify-center mt-24 bg-[#070707]
     md:mt-28 relative'>
        <div className='md:w-3/4 w-10/12   md:py-6'>
           < Image src='/grid-final.png' priority width={500} height={800} className='w-0 object-fill md:w-[75%] h-full absolute  z-[-1] opacity-[0.07] ' alt='grid'></Image>
         <div>
         {/* About-Title */}
         <h1 className='text-xl md:text-3xl font-semibold text-white mb-3 md:mb-4'>About Us</h1>
        
          <div className='flex flex-col md:flex-row'>
            {/* About-sec */}
            <img className='w-full md:w-[35%] no-color hover:grayscale-0 transition-all ease-in-out' src="/about-us.png" alt="" />
            {/* Info-sec */}/
            <div className='flex flex-col justify-start md:justify-center items-start gap-2 md:ml-14'>
                <h1 className='text-xl md:text-xl font-semibold primary mb-1 md:mb-4'>We Build Creative & Functional Digital Experiences</h1>
                <p className='text-xs leading-4 md:leading-6 md:text-[1rem] md:w-10/12 secondary mb-3 md:mb-6'>We are a full-service web agency based in Navi Mumbai, delivering innovative, user-centric web solutions for businesses and individuals. With expertise in modern technologies like Next.js, React, Node.js, and MongoDB, we craft websites and web applications that are not only visually stunning but also highly functional and optimized for performance.
<br /> <br />
Our approach combines creativity, technical excellence, and a focus on results, ensuring every project we deliver helps our clients achieve their goals and stand out online.</p>
                {/* Social-links */}
                <div className='flex gap-2 md:mb-4'>
                    <Link className='text-[0.7rem] md:text-sm' href="https://github.com/SwapniL1563" target='/'>
                    <Button   value='Github'></Button>
                    </Link>

                    <Link className='text-[0.7rem] md:text-sm' href="https://www.linkedin.com/in/swapnil-chorat-570497344/" target='/'>
                    <Button value='LinkedIn'></Button>
                    </Link>

                     <Link className='text-[0.7rem] md:text-sm' href="https://x.com/ChoratSwap55632" target='/'>
                    <Button value='Twitter'></Button>
                    </Link>

                  
                </div>

              </div>
           </div>

        </div>   
        </div>
    </div>
  )
}

export default About