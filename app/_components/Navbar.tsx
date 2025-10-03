import Link from 'next/link'
import React from 'react'
import { CircleUserRound, FolderOpenDot, LayoutGrid, Phone } from 'lucide-react';

const Navbar = () => {
  return (
   <div className='fixed z-50 left-1/2 right-1/2 top-7 flex justify-center'>
     <div className=' glass px-6 py-4 flex items-center justify-center gap-5 rounded-md '>
       {/* Navbar-Links */}
       <Link href='/'>
       <h1 className='text-gray-300 hover:text-white md:block hidden'>Home</h1>
       <h1 className="cursor-pointer flex md:hidden"><LayoutGrid  className="text-gray-300 hover:text-white"/></h1>
       </Link>  

       <Link href='/projects'>
       <h1 className='text-gray-300 hover:text-white md:block hidden'>Work</h1>
       <h1 className="cursor-pointer flex md:hidden"><FolderOpenDot className="text-gray-300 hover:text-white" /></h1>
       </Link>  

       <Link href='/about'>
       <h1 className='text-gray-300 hover:text-white md:block hidden'>About</h1>
       <h1 className="cursor-pointer flex md:hidden"><CircleUserRound className="text-gray-300 hover:text-white"/></h1>
       </Link>  

       <Link href='/contact' >
       <h1 className='text-gray-300 hover:text-white md:block hidden'>Contact</h1>
       <h1 className="cursor-pointer flex md:hidden"> <Phone className="text-gray-300 hover:text-white"/></h1>
       </Link>  
    </div> 
   </div>
  )
}

export default Navbar