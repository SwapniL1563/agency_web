import React from 'react'

const Button = ({value}) => {
  return (
    <div className='animate-shimmer glass px-3 py-2 md:px-6 md:py-3 rounded-md text-gray-300 hover:text-white hover:bg-[#d5d5d533] text-md'>{value}</div>
  )
}

export default Button