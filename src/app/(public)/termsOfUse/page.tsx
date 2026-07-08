// pages/terms-of-use.tsx
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import { baseUrl } from '@/helper/constant'
import { Loader2 } from 'lucide-react'
import React from 'react'

// export async function getServerSideProps(context: any) {
//     const { lang } = context.query
//     const isHindi = lang === 'hn'
//     return { props: { isHindi } }
// }

type SearchParams = Promise<{ lang: string }>
const TermsOfUsePage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const lang = (await searchParams)?.lang || 'hn'
    const isHindi = lang !== 'en'
    return (
        <React.Suspense
            fallback={
                <div className="flex justify-center items-center h-screen">
                    <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
                </div>
            }
        >
            <Header />

            <div className="py-12 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader heading={isHindi ? "उपयोग की शर्तें" : "Terms of Use"} />

                    <div className="mt-10 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {/* Intro */}
                        <p className="text-gray-600 leading-relaxed">
                            {isHindi ? (
                                <>
                                    <strong>माधवम् फाउंडेशन</strong> (“हम”, “हमारा”, या “हमसे”) में आपका स्वागत है।
                                    हमारी वेबसाइट{" "}
                                    <a
                                        href={baseUrl}
                                        className="text-blue-600 hover:underline"
                                    >
                                        https://www.madhavamfoundation.com
                                    </a>{" "}
                                    का उपयोग करके, आप इन उपयोग की शर्तों का पालन करने के लिए सहमत होते हैं।
                                    यदि आप सहमत नहीं हैं, तो कृपया वेबसाइट का उपयोग न करें।
                                </>
                            ) : (
                                <>
                                    Welcome to <strong>Madhavam Foundation</strong> (“we,” “our,” or “us”).
                                    By accessing or using our website{" "}
                                    <a
                                        href={baseUrl}
                                        className="text-blue-600 hover:underline"
                                    >
                                        https://www.madhavamfoundation.com
                                    </a>
                                    , you agree to comply with these Terms of Use. If you do not agree, please do not use our website.
                                </>
                            )}
                        </p>

                        {/* 1. Eligibility */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {isHindi ? "1. पात्रता" : "1. Eligibility"}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isHindi
                                    ? "इस वेबसाइट का उपयोग करके, आप यह दर्शाते हैं कि आपकी आयु कम से कम 18 वर्ष है और आपके पास कानूनी रूप से बाध्यकारी समझौते में प्रवेश करने की क्षमता है।"
                                    : "By using this website, you represent that you are at least 18 years of age and have the legal capacity to enter into a binding agreement."}
                            </p>
                        </section>

                        {/* 2. Use of Website */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {isHindi ? "2. वेबसाइट का उपयोग" : "2. Use of the Website"}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isHindi
                                    ? "आप सहमत हैं कि आप वेबसाइट का उपयोग केवल वैध उद्देश्यों के लिए करेंगे।"
                                    : "You agree to use our website for lawful purposes only."}
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-600 leading-relaxed">
                                {isHindi ? (
                                    <>
                                        <li>किसी भी अवैध या धोखाधड़ी उद्देश्य के लिए वेबसाइट का उपयोग न करें।</li>
                                        <li>अनधिकृत पहुंच प्राप्त करने का प्रयास न करें।</li>
                                        <li>वेबसाइट के सही कार्य में हस्तक्षेप न करें।</li>
                                        <li>फाउंडेशन की साख को नुकसान न पहुंचाएं।</li>
                                    </>
                                ) : (
                                    <>
                                        <li>Use the site for any fraudulent or unlawful purpose.</li>
                                        <li>Attempt to gain unauthorized access to the website.</li>
                                        <li>Interfere with the proper working of the site.</li>
                                        <li>Engage in conduct that may damage the reputation of the Foundation.</li>
                                    </>
                                )}
                            </ul>
                        </section>

                        {/* 3. Donations */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {isHindi ? "3. दान" : "3. Donations"}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isHindi
                                    ? "हमारी वेबसाइट के माध्यम से किए गए सभी दान स्वैच्छिक और गैर-वापसी योग्य हैं। दान सुरक्षित रूप से Razorpay के माध्यम से संसाधित किए जाते हैं।"
                                    : "All donations made through our website are voluntary and non-refundable. Donations are processed securely through Razorpay."}
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {isHindi ? "9. लागू कानून" : "9. Governing Law"}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isHindi
                                    ? "ये शर्तें भारत के कानूनों द्वारा शासित होंगी और किसी भी विवाद का निपटारा भारतीय न्यायालयों के अधिकार क्षेत्र में होगा।"
                                    : "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts."}
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {isHindi ? "10. संपर्क जानकारी" : "10. Contact Information"}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isHindi
                                    ? "किसी भी प्रश्न या चिंता के लिए कृपया हमसे संपर्क करें:"
                                    : "For any questions or concerns, please contact us at:"}
                            </p>
                            <div className="mt-2 text-gray-700">
                                📧{" "}
                                <a
                                    href="mailto:madhavamfoundation99@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    madhavamfoundation99@gmail.com
                                </a>
                                <br />
                                📞 +91 95208 12589
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Suspense>
    )
}

export default TermsOfUsePage
