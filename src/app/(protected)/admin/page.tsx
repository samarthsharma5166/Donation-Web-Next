import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import React from 'react'

const page = () => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Madhavam",
    },
    {
      text: "Foundation",
    },
    {
      text: "!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className='flex justify-center items-center h-screen'>
        {/* <h1 className='text-3xl'>Welcome to Madhavam Foundation!</h1> */}
      <TypewriterEffect words={words} />

    </div>
  )
}

export default page