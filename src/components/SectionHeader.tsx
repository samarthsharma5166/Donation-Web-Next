import React from 'react'

interface SectionHeaderProps {
    heading:string
}
const SectionHeader = ({heading}:SectionHeaderProps) => {
  return (
      <div className="relative">
          <h2 className="text-center max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-[#B09065] dark:text-neutral-200 font-sans">
              {heading}
          </h2>
          <div className="mx-auto h-1 w-14 bg-[#B09065]" />
      </div>
  )
}

export default SectionHeader