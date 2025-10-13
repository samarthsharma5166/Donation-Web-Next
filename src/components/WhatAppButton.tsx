import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const WhatAppButton = () => {
  return (
      <a
          href="https://wa.me/917906869998"
          target="_blank"
          className="text-green-600 hover:scale-110 transition-all ease-in-out duration-300  text-sm sm:text-base fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white  shadow-lg"
      >
          <FaWhatsapp className='size-8'/>
      </a>
  )
}

export default WhatAppButton