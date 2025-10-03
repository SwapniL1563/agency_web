import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { ArrowLeftSquare, ArrowRight, ArrowRightSquare, MoveUpRight } from 'lucide-react'

const Projects = () => {
  return (
    <div className='my-24  md:my-14 flex justify-center '>
        <div className=' md:w-3/4 w-10/12'>
         
         {/* Project's-Title */}
        <div className="flex justify-between items-center mb-3">
        <h1 className='text-xl md:text-3xl font-semibold text-white'>
           Our Recent Work</h1>
        <Link target='/' href='https://github.com/SwapniL1563'> <Button value='All projects >'></Button>
        </Link>
        </div>
        
        {/* Projects-grid */}
        <div className='grid grid-cols-1  md:grid-cols-2 gap-2'>

               
         {/* Cli Nexis */}
         <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m7.png"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>CLI NEXIS - Doctor Appointment System</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='ReactJS' ></Button>
                <Button value='NodeJS'></Button>
                <Button value='ExpressJS'></Button>
                <Button value='MongoDB'></Button>
                <Button value='JWT'></Button>
                <Button value='Tailwind'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://clinexis-fe.onrender.com/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

          {/* Fix-it */}
          <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m5.png"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>FIX IT - Home Services Booking Platform</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='NextJS' ></Button>
                <Button value='Typescript'></Button>
                <Button value='Prisma'></Button>
                <Button value='PostgreSQL'></Button>
                <Button value='Stripe'></Button>
                <Button value='Tailwind'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://fix-it-phi.vercel.app'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

          {/* Store It */}
          <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m8.png"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>STORE IT - File Storage Web App</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='NextJS' ></Button>
                <Button value='Tailwind'></Button>
                <Button value='TypeScript'></Button>
                <Button value='AppWrite'></Button>
                <Button value='Vercel'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://store-it-tau-one.vercel.app/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>

         {/* Mednutri */}
         <div className='px-4 pt-5 pb-7 md:px-7 mb:pt-7 md:pb-8 glass rounded-2xl  overflow-hidden relative '>
              <div className='w-full relative mx-auto h-auto overflow-hidden rounded-2xl'>
              <img src="/m0.png"  className='z-0 relative w-full rounded-2xl transition-all duration-300 hover:scale-110' alt="" /> 
              </div>
             
              <div className='pt-6 '>
               <h1 className='text-white text-md md:text-xl font-semibold'>MED NUTRI - AI-Powered Health Platform</h1>
               <div className='grid grid-cols-3  md:w-2/3 gap-1 md:gap-2 text-center  mt-3 mb-2 md:mb-2 text-xs '>
                <Button value='MERN' ></Button>
                <Button value='Tailwind'></Button>
                <Button value='Gemini'></Button>
                <Button value='JWT'></Button>
                <Button value='Nodemailer'></Button>
                <Button value='Postman'></Button>
               </div>

               <div className=' flex justify-end rounded-lg '>
               <Link target='/' href='https://mednutri-frontend.vercel.app/'>
                <button title='bt1' className='px-7 py-3 md:px-10 md:py-4 primary-bg rounded-xl hover:bg-[#2174fb] '> <MoveUpRight size={30}/></button>
               </Link>
               </div>
              </div>
         </div>
         
          

         </div>
        </div>
    </div>
  )
}

export default Projects