"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { useSearchParams } from "next/navigation";

export function AppleCardsCarouselDemo() {
    const params = useSearchParams();
    const lang = params.get("lang")

    const cards = lang === "hn" ? hindiData.map((card, index) => <Card key={card.src} card={card} index={index} />) : (data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    )))

    return (
        <div className="w-full h-full py-8">
            <div className="relative">
                <h2 className="text-center max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-[#B09065] dark:text-neutral-200 font-sans">
                    {lang === 'hn' ? "हम क्या कर रहे हैं": "What We’re Doing"}
                </h2>
                <div className="mx-auto h-1 w-14 bg-[#B09065]" />
            </div>
            <Carousel items={cards} />
        </div>
    );
}

// const DummyContent = () => {
//     return (
//         <>
//             {[...new Array(3).fill(1)].map((_, index) => {
//                 return (
//                     <div
//                         key={"dummy-content" + index}
//                         className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//                     >
//                         <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//                             <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                                 The first rule of Apple club is that you boast about Apple club.
//                             </span>{" "}
//                             Keep a journal, quickly jot down a grocery list, and take amazing
//                             class notes. Want to convert those notes to text? No problem.
//                             Langotiya jeetu ka mara hua yaar is ready to capture every
//                             thought.
//                         </p>
//                         <Image
//                             src="https://assets.aceternity.com/macbook.png"
//                             alt="Macbook mockup from Aceternity UI"
//                             height="500"
//                             width="500"
//                             className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//                         />
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

const data = [
    {
        category: "Cow Protection",
        title: "Serving and protecting cows with dedication.",
        src: "/cow.jpg",
        content: (
            <p>
                We establish and maintain cow shelters, promote awareness of the importance
                of cows, and encourage sustainable rural practices connected to cow service.
            </p>
        ),

    },
    {
        category: "Education & Employment",
        title: "Empowering youth through knowledge and skills.",
        src: "/education.jpeg",
        content: (
            <p>
                Free education, vocational training, yoga, and skill development programs
                for children and youth to create self-reliance and employment opportunities.
            </p>
        ),

    },
    {
        category: "Women & Child Welfare",
        title: "Supporting women, children, and the elderly.",
        src: "/womenAndChild.jpg",
        content: (
            <p>
                Special initiatives for women empowerment, child development, differently-abled
                persons, and senior citizens through welfare programs and cultural activities.
            </p>
        ),
    },
    {
        category: "Healthcare & Cleanliness",
        title: "Promoting health, hygiene, and awareness.",
        src: "/cleaning.jpg",
        content: (
            <p>
                Organizing health camps, blood donation drives, cleanliness campaigns, and
                awareness programs for healthier living.
            </p>
        ),
    },
    {
        category: "Environment & Nature",
        title: "Protecting nature for future generations.",
        src: "/nature.jpg",
        content: (
            <p>
                Activities like tree plantation, water conservation, pollution control, and
                sustainable development to protect our environment.
            </p>
        ),
    },
    {
        category: "Social Development",
        title: "Building a better society together.",
        src: "/teamUp.jpeg",
        content: (
            <p>
                Establishing schools, hostels, libraries, hospitals, and community welfare
                centers, while also raising funds nationally and internationally for
                humanitarian causes.
            </p>
        ),
    },
    {
        category: "Temple Renovation",
        title: "Preserving and restoring places of worship.",
        src: "/temple.png",
        content: (
            <p>
                Renovation, maintenance, and cultural preservation of temples to uphold
                spiritual heritage and provide a sacred space for communities.
            </p>
        ),
    },
    {
        category: "Hawan & Spiritual Growth",
        title: "Promoting positivity through Hawan.",
        src: "/hawan2.jpeg",
        content: (
            <p>
                Regular Hawan and spiritual activities are conducted to promote peace,
                harmony, and cultural values in society.
            </p>
        ),
    },
    {
        category: "Gurukul Education",
        title: "Blending traditional wisdom with modern learning.",
        src: "/gurukul.jpeg",
        content: (
            <p>
                We establish and support Gurukuls where children receive holistic education
                combining Vedic knowledge, moral values, yoga, and modern subjects.
                This ensures character building, discipline, and all-round development
                rooted in cultural heritage.
            </p>
        ),
    },
];

const hindiData = [
    {
        category: "गौ संरक्षण",
        title: "गायों की सेवा और संरक्षण के लिए समर्पित।",
        src: "/cow.jpg",
        content: (
            <p>
                हम गौशालाओं की स्थापना और संचालन करते हैं, गायों के महत्व के प्रति जागरूकता
                फैलाते हैं और ग्रामीण जीवन से जुड़े सतत विकास कार्यों को प्रोत्साहित करते हैं।
            </p>
        ),
    },
    {
        category: "शिक्षा एवं रोजगार",
        title: "ज्ञान और कौशल से युवाओं को सशक्त बनाना।",
        src: "/education.jpeg",
        content: (
            <p>
                बच्चों और युवाओं के लिए निःशुल्क शिक्षा, व्यावसायिक प्रशिक्षण, योग और कौशल विकास
                कार्यक्रमों के माध्यम से आत्मनिर्भरता और रोजगार के अवसर उत्पन्न करना।
            </p>
        ),
    },
    {
        category: "महिला एवं बाल कल्याण",
        title: "महिलाओं, बच्चों और वृद्धजनों को सहयोग।",
        src: "/womenAndChild.jpg",
        content: (
            <p>
                महिला सशक्तिकरण, बाल विकास, दिव्यांगजनों और वृद्धजनों के लिए विशेष पहल
                कल्याणकारी और सांस्कृतिक कार्यक्रमों के माध्यम से।
            </p>
        ),
    },
    {
        category: "स्वास्थ्य एवं स्वच्छता",
        title: "स्वास्थ्य, स्वच्छता और जागरूकता को बढ़ावा।",
        src: "/cleaning.jpg",
        content: (
            <p>
                स्वास्थ्य शिविर, रक्तदान अभियान, स्वच्छता अभियान और जनजागरूकता कार्यक्रमों
                का आयोजन करके स्वस्थ जीवन को बढ़ावा देना।
            </p>
        ),
    },
    {
        category: "पर्यावरण एवं प्रकृति",
        title: "भविष्य की पीढ़ियों के लिए प्रकृति का संरक्षण।",
        src: "/nature.jpg",
        content: (
            <p>
                वृक्षारोपण, जल संरक्षण, प्रदूषण नियंत्रण और सतत विकास जैसी गतिविधियों के माध्यम से
                पर्यावरण की रक्षा करना।
            </p>
        ),
    },
    {
        category: "सामाजिक विकास",
        title: "मिलकर एक बेहतर समाज का निर्माण।",
        src: "/teamUp.jpeg",
        content: (
            <p>
                विद्यालय, छात्रावास, पुस्तकालय, अस्पताल और सामुदायिक कल्याण केंद्रों की स्थापना,
                साथ ही राष्ट्रीय और अंतर्राष्ट्रीय स्तर पर मानवीय कार्यों के लिए धन संग्रह करना।
            </p>
        ),
    },
    {
        category: "मंदिर नवनीकरण",
        title: "पूजा स्थलों का संरक्षण और पुनर्निर्माण।",
        src: "/temple.png",
        content: (
            <p>
                मंदिरों के नवनीकरण, रखरखाव और सांस्कृतिक संरक्षण के कार्य ताकि आध्यात्मिक
                धरोहर बनी रहे और समाज के लिए पवित्र स्थल उपलब्ध हों।
            </p>
        ),
    },
    {
        category: "हवन एवं आध्यात्मिक उन्नति",
        title: "हवन के माध्यम से सकारात्मकता का प्रसार।",
        src: "/hawan2.jpeg",
        content: (
            <p>
                नियमित हवन और आध्यात्मिक गतिविधियाँ शांति, सद्भाव और सांस्कृतिक मूल्यों को
                बढ़ावा देती हैं।
            </p>
        ),
    },
    {
        category: "गुरुकुल शिक्षा",
        title: "पारंपरिक ज्ञान और आधुनिक शिक्षा का संगम।",
        src: "/gurukul.jpeg",
        content: (
            <p>
                हम गुरुकुलों की स्थापना और संचालन करते हैं जहाँ बच्चों को वैदिक ज्ञान,
                नैतिक मूल्य, योग और आधुनिक विषयों के साथ समग्र शिक्षा प्रदान की जाती है।
                इससे चरित्र निर्माण, अनुशासन और सांस्कृतिक धरोहर से जुड़ा सर्वांगीण विकास होता है।
            </p>
        ),
    },
];
