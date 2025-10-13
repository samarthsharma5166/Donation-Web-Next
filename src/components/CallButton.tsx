import React from 'react'
import { FiPhoneCall } from "react-icons/fi";

const CallButton = () => {
  return (
      <a
          href="tel:+917906869998"
          target="_blank"
          className="text-blue-600 hover:scale-110 transition-all ease-in-out duration-300  text-sm sm:text-base fixed bottom-20 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white  shadow-lg"
      >
          <FiPhoneCall className='size-6'/>
      </a>
  )
}

export default CallButton