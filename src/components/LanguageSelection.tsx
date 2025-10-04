"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

const LanguageSelection = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleClick(value: string) {
        // Copy existing query params
        const params = new URLSearchParams(searchParams.toString());
        // Set or update language param
        params.set("lang", value);

        // Push new URL with updated query
        router.push(`?${params.toString()}`);
        setOpen(false);
    }

    return (
        <div className="relative">
            <div className="flex cursor-pointer" onClick={() => setOpen(!open)}>
                <FaEarthAfrica className="size-6 text-[#B09065]" />
                <MdArrowDropDown className="size-6 text-[#B09065]" />
            </div>

            {open && (
                <div className="bg-white absolute z-50 w-fit rounded shadow-md">
                    <div
                        onClick={() => handleClick("hn")}
                        className="px-4 py-1 border-b cursor-pointer hover:bg-gray-100"
                    >
                        Hindi
                    </div>
                    <div
                        onClick={() => handleClick("en")}
                        className="px-4 py-1 cursor-pointer hover:bg-gray-100"
                    >
                        English
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelection;
