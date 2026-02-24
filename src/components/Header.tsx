"use client"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import MobileMenu from './MobileMenu';
import LanguageSelection from "./LanguageSelection";
import { useLoading } from "@/context/LoadingContext";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// {+++++++++++++++ constants +++++++++++++++}
const iconClass = "size-3 sm:size-4 transition-transform duration-200 group-hover:scale-125 animate-pulse"

const headerItems = [
    {
        text:"India,Up",
        icon: <FaLocationDot className={iconClass} />
    },
    {
        text: "madhavamfoundation99@gmail.com ",
        icon: <IoIosMail className={iconClass} />
    },
    {
        text: "+91 7906869998",
        icon: <FaPhoneAlt className={iconClass} />
    },
]

export const navigationLInks = [
    {
        name:"Home",
        hindiName:"होम",
        path:"/"
    },
    , {
        name: "Programs",
        hindiName: "प्रोग्राम",
        path: "/programs"
    },
    {
        name:"Blogs",
        hindiName:"ब्लॉग",
        path:"/blogs"
    },{
        name:"About Us",
        hindiName:"हमारे बारे में",
        path:"/aboutUs"
    }
]

const Header = () => {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang");
    const { setLoading } = useLoading();
    const pathname = usePathname();
    useEffect(() => {
        setLoading(false);
    }, [pathname, setLoading])
  return (
      <header>
        <div className='h-10 hidden md:flex bg-black text-white  items-center'>
              <div className='container  mx-auto flex flex-row gap-3 px-2 sm:px-0 md:px-4 sm:gap-8 cursor-pointer'>
                {
                    headerItems.map((item,index)=>
                        <div key={index} className='flex flex-row items-center gap-2 sm:gap-3 group transition-all duration-300 ease-in-out'>
                            {item.icon}
                            <h5 className='text-xs sm:text-sm transition-transform duration-300 group-hover:scale-110'>{item.text}</h5>
                        </div>
                    )
                }
            </div>
        </div>
        <div className='shadow-md h-20'>
          <nav className='container  mx-auto flex flex-row items-center justify-between gap-3 px-2 sm:px-0 md:px-4 h-full'>
                {/* Logo */}
                <Image src={"/Frame 7.png"} alt='logo' className='sm:w-28 w-24'  width={150} height={150}/>

                {/* Links */}
                <div className='space-x-12 hidden sm:block'>
                      {
                          navigationLInks.map((item, index) =>
                              <Link key={index} href={item!.path}
                               onClick={() => setLoading(true)}
                              className='inline-block text-sm sm:text-lg hover:text-[#B09065] transition-transform duration-300 hover:scale-110'>{lang === "hn" ? item!.hindiName : item!.name}</Link>
                          )
                      }
                </div>

                {/* control buttons */}
                <div className='hidden sm:flex  flex-row items-center gap-3 sm:gap-6'>
                      <Button className='text-[#867156] text-md transition-transform duration-300 hover:scale-110 hover:-translate-y-1' size={"lg"} variant={"link"}>
                          <Link href={"/contactUs"}>{lang === "hn" ? "संपर्क करें" : "Contact Us"}</Link>
                        </Button>
                      <Button className='bg-[#867156] hover:bg-[#8b7e6c] transition-transform duration-300 hover:-translate-y-1 hover:scale-110'>
                        <Link href={"/donate"}>{lang === "hn" ? "दान करें" : "Donate"}</Link>
                      </Button>
                      <LanguageSelection/>
                </div>

                {/* hamburger Menu */}
                <div className='sm:hidden block'>
                    <MobileMenu/>
                    </div>
            </nav>
        </div>
      </header>
  )
}

export default Header