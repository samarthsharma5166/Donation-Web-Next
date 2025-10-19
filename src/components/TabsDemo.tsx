"use client";

import DonationForm from "./DonationForm";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "Donate Now",
            value: "donate-now",
            content: (
                <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 pb-8 overflow-y-auto h-[500px] border border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donate Now</h3>
                    <DonationForm />
                </div>
            ),
        },
        {
            title: "Autopay",
            value: "autopay",
            content: (
                <div className="w-full bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl shadow-lg p-6 md:p-10 text-white h-[500px] flex items-center justify-center">
                    <p className="text-xl font-medium">Auto Monthly Pay Coming Soon 🚀</p>
                </div>
            ),
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-full max-w-5xl">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}
