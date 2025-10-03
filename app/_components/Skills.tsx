import React from 'react'
import { FaLaptopCode, FaPaintBrush, FaShoppingCart, FaRocket, FaTools } from 'react-icons/fa'

const Services = () => {
  return (
    <div className='mt-0 md:mt-8 py-4 flex justify-center'>
      <div className='w-10/12 md:w-3/4 py-4 flex flex-col gap-4 justify-center'>
        {/* Section Header */}
        <h1 className='text-3xl font-semibold text-white'>Our Services</h1>
        <p className='text-lg md:w-2/3 secondary'>
          We provide a full range of web solutions designed to help businesses succeed online. Here’s what we specialize in:
        </p>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-2 mt-6'>
          
          {/* Web Design & Development */}
          <div className='flex flex-col items-center glass py-14 px-5 text-center hover:bg-[#d5d5d533] cursor-pointer rounded-lg'>
            <FaLaptopCode className='text-5xl mb-4 primary' />
            <h2 className='text-2xl font-semibold mb-2'>Web Design & Development</h2>
            <p className='text-sm w-5/6 text-gray-300 mt-2'>
              Crafting responsive, visually appealing, and high-performing websites tailored to your brand and goals.
            </p>
          </div>

          {/* UI/UX Development */}
          <div className='flex flex-col items-center glass py-14 px-5 text-center hover:bg-[#d5d5d533] cursor-pointer rounded-lg'>
            <FaPaintBrush className='text-5xl mb-4 primary' />
            <h2 className='text-2xl font-semibold mb-2'>UI/UX Development</h2>
            <p className='text-sm w-5/6 text-gray-300 mt-2'>
              Designing intuitive interfaces and seamless experiences that engage and delight users.
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className='flex flex-col items-center glass py-14 px-5 text-center hover:bg-[#d5d5d533] cursor-pointer rounded-lg'>
            <FaShoppingCart className='text-5xl mb-4 primary' />
            <h2 className='text-2xl font-semibold mb-2'>E-commerce Solutions</h2>
            <p className='text-sm w-5/6 text-gray-300 mt-2'>
              Building scalable online stores optimized for sales, performance, and seamless user experience.
            </p>
          </div>

          {/* Website Optimization */}
          <div className='flex flex-col items-center glass py-14 px-5 text-center hover:bg-[#d5d5d533] cursor-pointer rounded-lg'>
            <FaRocket className='text-5xl mb-4 primary' />
            <h2 className='text-2xl font-semibold mb-2'>Website Optimization</h2>
            <p className='text-sm w-5/6 text-gray-300 mt-2'>
              Enhancing website speed, SEO, and mobile-friendliness to maximize performance and visibility.
            </p>
          </div>

          {/* Maintenance & Support */}
          <div className='flex flex-col items-center glass py-14 px-5 text-center hover:bg-[#d5d5d533] cursor-pointer rounded-lg'>
            <FaTools className='text-5xl mb-4 primary' />
            <h2 className='text-2xl font-semibold mb-2'>Maintenance & Support</h2>
            <p className='text-sm w-5/6 text-gray-300 mt-2'>
              Keeping your website secure, updated, and running smoothly so you can focus on growing your business.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
