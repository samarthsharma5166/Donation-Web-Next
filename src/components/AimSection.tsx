// components/AimSection.tsx
import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const content = {
    en: [
        {
            title: "Cow Protection & Service",
            text: "This focuses on protecting and nurturing cows, which are considered sacred and essential in Indian culture. It’s not just about building shelters (gaushalas) but also about raising awareness of how cows contribute to agriculture, dairy, and environmental balance. The objective is to safeguard indigenous breeds, promote organic farming through cow-based products (like dung and urine for manure/medicine), and highlight cows’ role in sustainable living.",
            image: "/cow.jpg",
        },
        {
            title: "Education & Employment",
            text: "Providing free education, self-employment opportunities, skill development, yoga training, and scientific & vocational learning for children and youthThe goal here is holistic development. Education is not limited to academics but also covers vocational training, technical skills, and self-employment so that youth can be self-reliant. Yoga training ensures mental and physical well-being. Scientific and vocational learning equips children and young people with modern knowledge while staying connected to traditional values, bridging the gap between theory and practical livelihood opportunities.",
            image: "/education2.jpg",
        },
        {
            title: "Cultural & Social Awareness",
            text: "Organizing cultural, social, and educational programs to build awareness against addictions, superstitions, and social evils.",
            image: "/culture.jpeg",
        },
        // {
        //     title: "Support for Women, Children & Elderly",
        //     text: "Empowering women, children, differently-abled persons, and the elderly through welfare and cultural programs.",
        //     image: "/images/women.jpg",
        // },
        // {
        //     title: "Healthcare & Cleanliness",
        //     text: "Establishing health centers, blood donation camps, cleanliness drives, and sanitation awareness programs.",
        //     image: "/images/health.jpg",
        // },
        // {
        //     title: "Rural Development",
        //     text: "Promoting village development, self-reliance, cleanliness, safe drinking water, and healthy lifestyles.",
        //     image: "/images/rural.jpg",
        // },
        // {
        //     title: "Environment & Nature",
        //     text: "Initiatives for tree plantation, water conservation, pollution control, and sustainable development.",
        //     image: "/images/environment.jpg",
        // },
        // {
        //     title: "Social Welfare Projects",
        //     text: "Construction of schools, hostels, old age homes, hospitals, libraries, and public welfare institutions.",
        //     image: "/images/welfare.jpg",
        // },
        // {
        //     title: "Fundraising for Welfare",
        //     text: "Collecting resources and donations for cow protection, environment, employment, development, and elderly care, both nationally and internationally.",
        //     image: "/images/fundraising.jpg",
        // },
        // {
        //     title: "Humanitarian Work",
        //     text: "Creating and implementing any project that benefits humanity.",
        //     image: "/images/humanitarian.jpg",
        // },
    ],
    hn: [
        {
            title: "गौ संरक्षण एवं सेवा",
            text: "यह कार्य केवल गायों को बचाने तक सीमित नहीं है, बल्कि गोवंश की शुद्ध नस्लों को सुरक्षित रखना, उनके लिए उचित आश्रय (गोशाला) बनाना, तथा लोगों को यह समझाना कि गायें केवल दूध ही नहीं देतीं बल्कि खेती, औषधि और पर्यावरण संतुलन में भी अमूल्य योगदान करती हैं।",
            image: "/cow.jpg",
        },
        {
            title: "शिक्षा एवं रोजगार",
            text: "इसका उद्देश्य बच्चों और युवाओं को जीवन के हर पहलू में सशक्त बनाना है। यहाँ शिक्षा केवल किताबों तक सीमित नहीं है, बल्कि व्यावसायिक (vocational) और तकनीकी (technical) कौशल पर भी ज़ोर दिया गया है। योग प्रशिक्षण से मानसिक और शारीरिक स्वास्थ्य को बढ़ावा दिया जाएगा। स्वरोजगार और कौशल विकास से युवाओं को आत्मनिर्भर बनने का मार्ग मिलेगा।",
            image: "/education2.jpg",
        },
        {
            title: "सांस्कृतिक एवं सामाजिक जागरूकता",
            text: "नशा, अंधविश्वास एवं कुरीतियों से मुक्ति हेतु सांस्कृतिक, सामाजिक एवं शैक्षिक कार्यक्रमों का आयोजन।",
            image: "/culture.jpeg",
        },
        // {
        //     title: "महिला, बच्चे एवं वृद्ध सहायता",
        //     text: "महिलाओं, बच्चों, विकलांगों एवं वृद्धजनों को सहयोग व सशक्तिकरण हेतु कार्य करना।",
        //     image: "/images/women.jpg",
        // },
        // {
        //     title: "स्वास्थ्य एवं स्वच्छता",
        //     text: "स्वास्थ्य केंद्र, रक्तदान शिविर, स्वच्छता अभियान एवं जनजागरूकता कार्यक्रमों का आयोजन।",
        //     image: "/images/health.jpg",
        // },
        // {
        //     title: "ग्राम विकास",
        //     text: "गाँवों में स्वच्छता, आत्मनिर्भरता, शुद्ध पेयजल, स्वास्थ्यप्रद जीवनशैली एवं विकास को बढ़ावा देना।",
        //     image: "/images/rural.jpg",
        // },
        // {
        //     title: "पर्यावरण एवं प्रकृति",
        //     text: "वृक्षारोपण, जल संरक्षण, प्रदूषण नियंत्रण एवं सतत विकास हेतु कार्य करना।",
        //     image: "/images/environment.jpg",
        // },
        // {
        //     title: "सामाजिक कल्याण कार्य",
        //     text: "विद्यालय, छात्रावास, वृद्धाश्रम, अस्पताल, पुस्तकालय आदि का निर्माण एवं संचालन।",
        //     image: "/images/welfare.jpg",
        // },
        // {
        //     title: "धन संग्रहण",
        //     text: "गौ सेवा, पर्यावरण, स्वरोजगार, विकास एवं वृद्धजनों की सहायता हेतु राष्ट्रीय व अंतर्राष्ट्रीय स्तर पर धन एकत्रित करना।",
        //     image: "/images/fundraising.jpg",
        // },
        // {
        //     title: "मानव सेवा",
        //     text: "किसी भी मानवोपयोगी योजना का निर्माण एवं क्रियान्वयन करना।",
        //     image: "/images/humanitarian.jpg",
        // },
    ],
};

type AimSectionProps = {
    searchParams?: Record<string, string | string[]>;
};

const AimSection = async({ searchParams }: AimSectionProps) => {
    const lang = ( searchParams)?.lang === "hn" ? "hn" : "en";

    return (
        <div className="container p-4 sm:p-0 mx-auto py-12 ">
            <SectionHeader heading={"Aim of the Trust"} />
            <div className="flex flex-col gap-16 mt-10">
                {content[lang].map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                            }`}
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.text}</p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AimSection;
