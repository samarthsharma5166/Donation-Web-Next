import React, { useState } from 'react'
import { IoClose, IoMenuOutline } from 'react-icons/io5'
import { navigationLInks } from './Header';
import Link from 'next/link';
import { Button } from './ui/button';
import LanguageSelection from './LanguageSelection';
import { useLoading } from '@/context/LoadingContext';

const MobileMenu = () => {
  const [model, setModel] = useState(false);
  const { setLoading } = useLoading();

  const handleLinkClick = () => {
    setLoading(true);
    setModel(false);
  };

  return (
    <div>
      <IoMenuOutline
        className='size-8 relative z-40'
        onClick={() => setModel(true)}
      />
      {/* ====== Sidebar ====== */}
      {model && (
        <div className='fixed z-50 top-0 right-0 w-3/4 h-screen overflow-y-scroll shadow-lg shadow-sidebar-primary border-sidebar bg-white'>
          <div className='flex flex-col h-full'>
            {/* Close button */}
            <div className='flex justify-between border-b py-4 px-3'>
              <LanguageSelection/>
              <IoClose className='size-6 cursor-pointer' onClick={() => setModel(false)} />
            </div>

            {/* Links + Buttons */}
            <div className='flex flex-col justify-between flex-1'>
              {/* Links */}
              <div>
                {navigationLInks.map((link, idx) => {
                  if (typeof link === 'object' && link !== null) {
                    return (
                      <Link
                        className='block text-center py-3 border-b hover:bg-[#867156] hover:text-white'
                        key={idx}
                        href={link.path}
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Buttons */}
              <div className='flex flex-col items-center gap-3 sm:gap-6 py-6'>
                  <Button
                    className='text-[#867156] text-md transition-transform duration-300 hover:scale-110 hover:-translate-y-1'
                    size={"lg"}
                    variant={"link"}
                    asChild
                  >
                <Link href={"/contactUs"} onClick={handleLinkClick}>
                    Contact Us
                </Link>
                  </Button>
                <Button asChild className='bg-[#867156] hover:bg-[#8b7e6c] transition-transform duration-300 hover:-translate-y-1 hover:scale-110'>
                  <Link href={"/donate"} onClick={handleLinkClick}>Donate Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
