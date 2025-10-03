import { Github, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-center mt-4 bg-[#070707]
    md:mt-28 relative pb-4'>
       <div className='md:w-3/4 w-10/12   md:py-6 flex flex-col gap-3'>
            <h1 className='text-center text-md md:text-2xl font-semibold text-white mb-3 md:mb-4'>Let’s Build Something Together</h1>
            {/* Social links */}
            <div className='flex justify-center gap-2 md:gap-5 mb-3'>
              <Link  href="https://github.com/SwapniL1563" target='/'>
              <GithubIcon color='#4b5563'   size={25}/>
              </Link>
              <Link href='https://www.linkedin.com/in/swapnil-chorat-570497344/'>
              <LinkedinIcon color='#4b5563'   size={25}/>
              </Link>
              <Link href='https://x.com/ChoratSwap55632'>
              <TwitterIcon color='#4b5563'   size={25}/>
              </Link>
              <Link href=''>
              <InstagramIcon color='#4b5563' size={25}/>
              </Link>
            </div>
             
          <h1 className='text-gray-600 text-center text-[0.55rem] md:text-xs'>© 2025 | All Rights Reserved | Crafted with ❤️</h1>   
            
        </div>
    </div>
  )
}

export default Footer