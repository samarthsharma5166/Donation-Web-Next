import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-3xl font-bold'>
        <Link className='text-blue-500 font-light text-xl animate-pulse' href={"/"}>Go Back</Link>
        <div> Donation page</div> 
    </div>
  )
}

export default page