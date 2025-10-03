import { div } from 'framer-motion/client'
import { Code } from 'lucide-react'
import React from 'react'

const Avatar = () => {
  return (
    <div className='mt-6 justify-center rounded-lg  items-center flex gap-2  text-gray-300 hover:text-white'>
      <div className='flex gap-2 items-center'>
      <h1 >Always Available</h1>
      <div className="relative flex flex-col h-4 w-4 rounded-lg mr-2">
    <span className="animate-ping absolute left-0 top-0 h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#2a79f8] "></span>
  </div>
      </div>
  </div>
  )
}

export default Avatar
