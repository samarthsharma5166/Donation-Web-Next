"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const heroSectionContent = [
    {
        id: 0,
        image: "bg-[url(/slide1.png)]",
        heading: "Lighting the Path to a Brighter Tomorrow",
        subheading: "Empowering underserved communities through education, healthcare, and hope",
        hindiHeading:"एक उज्जवल भविष्य की राह को रोशन करना",
        hindiSubheading:"शिक्षा, स्वास्थ्य और आशा के माध्यम से वंचित समुदायों को सशक्त बनाना"
    },
    {
        id: 1,
        image: "bg-[url(/slide2.jpg)]",
        heading: "To be the most trustworthy international leading",
        subheading: "Empowering underserved communities through education, healthcare, and hope",
        hindiHeading: "सबसे विश्वसनीय अंतर्राष्ट्रीय अग्रणी बनने की ओर",
        hindiSubheading: "शिक्षा, स्वास्थ्य और आशा के माध्यम से वंचित समुदायों को सशक्त बनाना"
    }
]
const HeroSection = () => {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => prev === heroSectionContent.length - 1 ? 0 : prev + 1)
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <div className="relative h-[25vh] sm:h-[35vh] md:h-[calc(100vh-5rem)] overflow-hidden">
                {
                    heroSectionContent.map((item) =>
                        <div
                            key={item.id}
                            className={`absolute z-10 inset-0 ${item.image} bg-no-repeat md:bg-center bg-cover transition-opacity duration-1000 ease-in-out`}
                            style={{
                                opacity: item.id === index ? 1 : 0,
                            }}
                        />
                    )
                }
                <div className="absolute z-30 inset-0 bg-[#B09065] opacity-20" />
                {heroSectionContent.map((item) => (
                    <div
                        key={item.id}
                        className={`absolute z-20 inset-0 flex flex-col gap-1 sm:gap-4 items-center justify-center transition-opacity duration-1000 ease-in-out`}
                        style={{ opacity: item.id === index ? 1 : 0 }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center drop-shadow-lg">
                            {lang === "hn" ? item.hindiHeading : item.heading}
                        </h1>
                        <h4 className="text-white text-xs sm:text-sm md:text-base xl:text-lg tracking-widest font-light text-center">
                            {lang === "hn" ? item.hindiSubheading : item.subheading}
                        </h4>
                    </div>
                ))}

                <Button asChild size={"lg"} className="absolute z-40  justify-center items-center shadow-black shadow-md hover:bg-[#8b7e6c] hover:-translate-y-1 scale-110 hover:scale-125 transition-transform duration-300 ease-in-out hidden sm:flex sm:bottom-10 md:bottom-[20rem] lg:bottom-10 xl:bottom-[8rem] 2xl:bottm-74 bg-[#867156]  left-1/2 -translate-x-1/2">
                    <Link href={"/donate"}>{lang === "hn" ? "दान करें" : "Donate Now"}</Link>
                </Button>
                
                <div className="absolute z-40 bottom-5 2xl:bottom-14 md:bottom-8  left-1/2 -translate-x-1/2 flex gap-3">
                    {
                        heroSectionContent.map((item) => (
                            <span
                                key={item.id}
                                onClick={() => setIndex(item.id)}
                                className={` bg-gray-200 w-2 sm:w-3 h-2 md:h-3 rounded-full cursor-pointer transition-all duration-500 ease-in-out ${index === item.id ? "w-5 sm:w-16 bg-white" : "w-2"}`}></span>
                        ))
                    }
                </div>



                
            </div>

        </div>
    )
}

export default HeroSection