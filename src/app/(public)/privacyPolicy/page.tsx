import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import { baseUrl } from '@/helper/constant'
import React from 'react'

// ✅ Server Component — SSR enabled
type SearchParams = Promise<{ lang: string }>
const PrivacyPolicyPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const lang = (await searchParams)?.lang || 'hn'
    const isHindi = lang !== 'en'

    return (
        <>
            <Header />
            <div className="py-12 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader heading={isHindi ? "गोपनीयता नीति" : "Privacy Policy"} />

                    <div className="mt-10 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {isHindi ? (
                            <>
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>प्रभावी तिथि:</strong> 11 अक्टूबर 2025
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>माधवम् फाउंडेशन</strong> (“हम”, “हमारा”, “हमसे”) में आपका स्वागत है।
                                    हम आपकी व्यक्तिगत जानकारी और गोपनीयता की सुरक्षा के लिए प्रतिबद्ध हैं।
                                    यह गोपनीयता नीति बताती है कि हम आपकी जानकारी को कैसे एकत्रित, उपयोग, साझा और सुरक्षित रखते हैं
                                    जब आप हमारी वेबसाइट (<a href={baseUrl} className="text-blue-600 hover:underline">
                                        https://www.madhavamfoundation.com
                                    </a>) पर आते हैं।
                                </p>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">1. हम कौन सी जानकारी एकत्र करते हैं</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        हम केवल वही जानकारी एकत्र करते हैं जो आप स्वेच्छा से प्रदान करते हैं, जैसे कि दान या संपर्क करते समय —
                                        नाम, ईमेल, फ़ोन नंबर, पता, शहर, देश, पिन कोड, जन्म तिथि, दान राशि और टिप्पणी।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">2. जानकारी का उपयोग कैसे किया जाता है</h2>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-600 leading-relaxed">
                                        <li>Razorpay के माध्यम से सुरक्षित भुगतान प्रक्रिया के लिए</li>
                                        <li>इनवॉइस और दान रसीद जारी करने के लिए</li>
                                        <li>आपसे संवाद करने और अद्यतन साझा करने के लिए</li>
                                        <li>कानूनी और लेखा उद्देश्यों के लिए रिकॉर्ड रखने हेतु</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">3. डेटा साझा करना और सुरक्षा</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        हम आपकी जानकारी को किसी भी तीसरे पक्ष को नहीं बेचते या किराए पर नहीं देते।
                                        केवल Razorpay भुगतान प्रक्रिया और कानूनी आवश्यकताओं के लिए जानकारी साझा की जा सकती है।
                                        सभी लेनदेन सुरक्षित सर्वर पर एन्क्रिप्टेड होते हैं।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">4. कुकीज़ और ट्रैकिंग</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        हमारी वेबसाइट किसी भी कुकीज़ या थर्ड-पार्टी ट्रैकिंग टूल का उपयोग नहीं करती है।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">5. डेटा संरक्षण</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        आपकी जानकारी केवल लेखा, कर और कानूनी अनुपालन आवश्यकताओं के लिए सुरक्षित रखी जाती है।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">6. अंतर्राष्ट्रीय दान</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        अंतर्राष्ट्रीय दान लागू विदेशी मुद्रा और मनी लॉन्ड्रिंग कानूनों के अनुसार संसाधित किए जाते हैं।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">7. आपके अधिकार</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        आप अपनी व्यक्तिगत जानकारी की समीक्षा, संशोधन या हटाने के लिए
                                        हमसे संपर्क कर सकते हैं:
                                        <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline ml-1">
                                            madhavamfoundation99@gmail.com
                                        </a>।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">8. नीति में परिवर्तन</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        हम समय-समय पर इस नीति को अपडेट कर सकते हैं। कोई भी नया संस्करण इस पेज पर “प्रभावी तिथि” के साथ प्रदर्शित किया जाएगा।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">9. संपर्क करें</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        किसी भी प्रश्न या सुझाव के लिए, कृपया हमसे संपर्क करें:
                                    </p>
                                    <div className="mt-2 text-gray-700">
                                        📧 <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline">madhavamfoundation99@gmail.com</a><br />
                                        📞 +91 95208 12589
                                    </div>
                                </section>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>Effective Date:</strong> October 11, 2025
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Welcome to <strong>Madhavam Foundation</strong> ("we", "our", "us").
                                    We are committed to protecting your personal information and your right to privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                                    (<a href={baseUrl} className="text-blue-600 hover:underline">
                                        https://www.madhavamfoundation.com
                                    </a>).
                                </p>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        We collect personal information that you voluntarily provide when making a donation or contacting us.
                                        This may include your name, email, phone number, address, city, country, pincode, date of birth,
                                        donation amount, and comments.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-600 leading-relaxed">
                                        <li>To process donations securely through Razorpay</li>
                                        <li>To issue invoices and donation receipts</li>
                                        <li>To communicate updates or acknowledgments</li>
                                        <li>To maintain legal and record-keeping compliance</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Data Sharing and Security</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        We do not sell, rent, or share your data with any third parties except as required to process payments
                                        through <strong>Razorpay</strong> or as mandated by law. All transactions are encrypted and handled through
                                        secure servers.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Cookies and Tracking</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        We do not use cookies, analytics, or third-party tracking tools on our website.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Data Retention</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Your information is retained only as long as required for accounting, taxation, and legal compliance purposes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">6. International Donations</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        For international donors, transactions are processed in accordance with applicable
                                        foreign exchange and anti-money laundering laws.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Your Rights</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        You may request to review, correct, or delete your personal data by contacting us at
                                        <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline ml-1">
                                            madhavamfoundation99@gmail.com
                                        </a>.
                                        Requests are subject to legal and regulatory obligations.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Updates to This Policy</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        We may update this Privacy Policy periodically. The revised version will be posted on this page
                                        with an updated “Effective Date.”
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Contact Us</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                                    </p>
                                    <div className="mt-2 text-gray-700">
                                        📧 <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline">madhavamfoundation99@gmail.com</a><br />
                                        📞 +91 95208 12589
                                    </div>
                                </section>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicyPage
