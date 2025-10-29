import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

export const metadata = {
  title: "About Us | Madhavam Foundation",
  description:
    "Madhavam Foundation is dedicated to uplifting humanity through education, healthcare, cultural preservation, and selfless service.",
};

type SearchParams = Promise<{ lang?: string }>;

const AboutPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  // ✅ Server-side rendering (async ensures SSR)
  const { lang } = await searchParams;
  const isHindi = lang === "hn";

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 px-6 md:px-20 py-16 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <SectionHeader heading={isHindi ? "हमारे बारे में" : "About Us"} />

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {isHindi
              ? "सेवा और मानवता के मार्ग को प्रकाशित करना"
              : "Lighting the Path of Service and Humanity"}
          </p>

          <div className="space-y-6 text-justify leading-relaxed">
            {/* === ABOUT SECTION === */}
            {isHindi ? (
              <>
                <p>
                  करुणा, सेवा और शिक्षा के माध्यम से मानवता को उठाने की दृष्टि
                  से स्थापित <strong>माधवम् फाउंडेशन</strong> सामाजिक कल्याण और
                  सांस्कृतिक संरक्षण का प्रतीक है। यह ट्रस्ट{" "}
                  <strong>
                    श्री सूरज कुमार शर्मा (आचार्य माधवानंद जी महाराज)
                  </strong>{" "}
                  द्वारा <strong>9 जनवरी 2024</strong> को स्थापित किया गया। यह
                  संस्थान संतों की शिक्षाओं से प्रेरित होकर सदाचार, निःस्वार्थ
                  सेवा और नैतिकता से युक्त जीवन को प्रोत्साहित करने हेतु समर्पित
                  है।
                </p>

                <p>
                  हमारी यात्रा एक सरल विश्वास से प्रारंभ हुई — कि मानवता की
                  सेवा ही सच्ची उपासना है। इसी सिद्धांत के मार्गदर्शन में माधव
                  फाउंडेशन करुणा, शिक्षा और सांस्कृतिक मूल्यों पर आधारित समाज
                  के निर्माण की दिशा में कार्य कर रहा है। छात्रों को सहयोग देने
                  से लेकर भारतीय संस्कृति के संरक्षण तक, हमारा उद्देश्य प्रत्येक
                  जीवन में सकारात्मक प्रभाव उत्पन्न करना है।
                </p>

                <h2 className="text-2xl font-semibold mt-10 text-gray-900">
                  हमारा मिशन
                </h2>
                <p>
                  शिक्षा, स्वास्थ्य और नैतिक उत्थान के माध्यम से समग्र मानव
                  विकास को प्रोत्साहित करना, साथ ही भारतीय संस्कृति के
                  शाश्वत मूल्यों का प्रसार करना। हम एक ऐसे समाज के निर्माण का
                  प्रयास कर रहे हैं जहाँ सेवा, करुणा और आत्मनिर्भरता जीवन के
                  मार्गदर्शक सिद्धांत बनें।
                </p>

                <h2 className="text-2xl font-semibold mt-8 text-gray-900">
                  हमारा विज़न
                </h2>
                <p>
                  एक विश्वसनीय और अग्रणी संस्था बनना जो सामाजिक, आध्यात्मिक और
                  शैक्षिक उत्थान के माध्यम से समाज के समग्र कल्याण हेतु कार्यरत
                  हो। हम{" "}
                  <em>“सेवा परम धर्म”</em> (सेवा ही सर्वोच्च धर्म है) के सिद्धांत
                  पर आधारित सतत विकास और मानवीय मूल्यों के संवर्धन के लिए
                  प्रतिबद्ध हैं।
                </p>

                <h2 className="text-2xl font-semibold mt-8 text-gray-900">
                  हमारे प्रमुख कार्य क्षेत्र
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>शिक्षा और सशक्तिकरण:</strong> छात्रवृत्ति, शिक्षा
                    सहयोग और नैतिक मार्गदर्शन; गरीब और वंचित बच्चों के लिए
                    प्रशिक्षण केंद्रों की स्थापना।
                  </li>
                  <li>
                    <strong>स्वास्थ्य और मानव सेवा:</strong> स्वास्थ्य शिविरों
                    का आयोजन, चिकित्सा सहायता, वृद्ध और विकलांग व्यक्तियों को
                    सहयोग प्रदान करना।
                  </li>
                  <li>
                    <strong>सांस्कृतिक संरक्षण:</strong> भारतीय संस्कृति,
                    परंपराओं और मूल्यों के प्रचार-प्रसार हेतु कार्यक्रमों और
                    प्रकाशनों का आयोजन।
                  </li>
                  <li>
                    <strong>पर्यावरण और गौ सेवा:</strong> विशेष रूप से गौ रक्षा
                    (<em>गौसेवा</em>) के माध्यम से पशु कल्याण और पर्यावरण जागरूकता
                    को बढ़ावा देना।
                  </li>
                  <li>
                    <strong>ग्रामीण और सामाजिक विकास:</strong> महिलाओं के
                    सशक्तिकरण, कौशल विकास और रोजगार के अवसरों को बढ़ावा देना
                    ताकि आत्मनिर्भर गाँवों का निर्माण हो सके।
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 text-gray-900">
                  हमारी प्रतिबद्धता
                </h2>
                <p>
                  माधवम् फाउंडेशन का प्रत्येक कार्य <em>निष्काम सेवा</em> की भावना
                  से प्रेरित है। हम समाज में ईमानदारी, करुणा और सेवा की भावना को
                  बढ़ावा देने के लिए समर्पित हैं। हमारा उद्देश्य एक ऐसे भारत का
                  निर्माण करना है जहाँ शिक्षा प्रकाश फैलाए, सेवा उत्थान करे और
                  संस्कृति हमें जोड़े।
                </p>
              </>
            ) : (
              <>
                <p>
                  Founded with a vision to uplift humanity through compassion,
                  service, and education, <strong>Madhavam Foundation</strong>{" "}
                  stands as a beacon of hope for social welfare and cultural
                  preservation. Established by{" "}
                  <strong>Shri Suraj Kumar Sharma (Acharya Madhavanand Ji Maharaj)</strong>{" "}
                  on <strong>9th January 2024</strong>, the foundation is deeply
                  inspired by the teachings of revered saints and aims to
                  promote a life of virtue, selfless service, and moral strength.
                </p>

                <p>
                  Our journey began with a simple belief — that serving humanity
                  is the truest form of worship. Guided by this principle,
                  Madhavam Foundation works towards building a society rooted in
                  compassion, education, and cultural values. From supporting
                  students and uplifting the underprivileged to preserving
                  India’s spiritual and cultural heritage, our mission is to
                  create a positive and lasting impact in every life we touch.
                </p>

                <h2 className="text-2xl font-semibold mt-10 text-gray-900">
                  Our Mission
                </h2>
                <p>
                  To promote holistic human development through education,
                  healthcare, and moral upliftment while preserving and
                  spreading the timeless values of Indian culture. We strive to
                  create an inclusive society where service, compassion, and
                  self-reliance become guiding principles of life.
                </p>

                <h2 className="text-2xl font-semibold mt-8 text-gray-900">
                  Our Vision
                </h2>
                <p>
                  To be a trusted and leading organization working for the
                  overall well-being of society — socially, spiritually, and
                  educationally — by nurturing values, empowering individuals,
                  and fostering sustainable development in alignment with the
                  ideals of <em>“Seva Parmo Dharma”</em> (Service is the highest
                  duty).
                </p>

                <h2 className="text-2xl font-semibold mt-8 text-gray-900">
                  Our Focus Areas
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Education & Empowerment:</strong> Providing
                    scholarships, educational support, and moral guidance to
                    students; establishing schools and training centers for the
                    underprivileged.
                  </li>
                  <li>
                    <strong>Healthcare & Humanitarian Support:</strong>{" "}
                    Organizing health camps, providing medical aid, and
                    supporting the elderly, disabled, and needy.
                  </li>
                  <li>
                    <strong>Cultural Preservation:</strong> Promoting Indian
                    culture, values, and traditions through various programs,
                    publications, and community outreach initiatives.
                  </li>
                  <li>
                    <strong>Environment & Cow Protection:</strong> Working
                    towards animal welfare, especially cow protection (
                    <em>Gauseva</em>), and promoting environmental awareness and
                    sustainability.
                  </li>
                  <li>
                    <strong>Rural & Social Development:</strong> Encouraging
                    employment opportunities, women empowerment, and skill
                    development in rural communities to build self-reliant
                    villages.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 text-gray-900">
                  Our Commitment
                </h2>
                <p>
                  At Madhavam Foundation, every initiative reflects our dedication
                  to selfless service (<em>Nishkaam Seva</em>). We aim to inspire
                  individuals to lead lives of integrity, compassion, and
                  devotion to the greater good of society. Together, we strive
                  to build a nation where education enlightens, service uplifts,
                  and culture unites.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
