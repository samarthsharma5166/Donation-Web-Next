import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionHeader from '@/components/SectionHeader';
import { Loader2 } from 'lucide-react';
import React from 'react';

export const dynamic = 'force-dynamic'; // ensures SSR on each request
type SearchParams = Promise<{ lang: string }>
const RefundCancellationPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const lang = (await searchParams)?.lang || 'en'
    const isHindi = lang === 'hn'

    return (
        <>
            <Header />
            <div className="py-12 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader
                        heading={isHindi ? 'रिफंड और रद्दीकरण नीति' : 'Refund & Cancellation Policy'}
                    />

                    <div className="mt-10 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {isHindi ? (
                            <>
                                {/* Hindi Version */}
                                <p className="text-gray-600 leading-relaxed">
                                    यह <strong>रिफंड और रद्दीकरण नीति</strong> सभी दान पर लागू होती है जो
                                    <strong> मधवम फाउंडेशन </strong> की आधिकारिक वेबसाइट
                                    (<a href="https://www.madhavamfoundation.com" className="text-blue-600 hover:underline ml-1">
                                        https://www.madhavamfoundation.com
                                    </a>)
                                    के माध्यम से किए जाते हैं।
                                </p>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">1. गैर-वापसी योग्य दान</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>मधवम फाउंडेशन</strong> को किया गया हर दान अंतिम और गैर-वापसी योग्य है।
                                        एक बार जब दान <strong>Razorpay</strong> के माध्यम से सफलतापूर्वक संसाधित हो जाता है,
                                        तो इसे किसी भी कारण से रद्द, वापस या स्थानांतरित नहीं किया जा सकता।
                                    </p>
                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        इसलिए, दाताओं से अनुरोध है कि दान की पुष्टि करने से पहले सभी विवरणों की सावधानीपूर्वक जाँच करें।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">2. डुप्लिकेट लेनदेन</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        यदि किसी तकनीकी कारण या गलती से एक ही दान कई बार हो जाता है,
                                        तो कृपया तुरंत हमें इस ईमेल पर सूचित करें:
                                        <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline ml-1">
                                            madhavamfoundation99@gmail.com
                                        </a>.
                                    </p>
                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        सत्यापन के बाद, यदि दावा मान्य पाया जाता है, तो अतिरिक्त राशि को
                                        <strong>7–10 कार्य दिवसों</strong> में मूल भुगतान विधि के माध्यम से वापस कर दिया जाएगा।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">3. असफल लेनदेन</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        यदि आपका भुगतान असफल हो जाता है, लेकिन राशि आपके बैंक खाते से काट ली गई है,
                                        तो यह राशि आमतौर पर कुछ दिनों में आपके बैंक द्वारा स्वचालित रूप से वापस कर दी जाती है।
                                        यदि आपको राशि वापस नहीं मिलती है, तो कृपया अपने बैंक या हमसे संपर्क करें।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">4. रसीद / प्रमाण</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        प्रत्येक सफल दान के लिए आपको ईमेल के माध्यम से एक डिजिटल रसीद प्राप्त होगी।
                                        यह रसीद आपके दान का आधिकारिक प्रमाण है।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">5. अंतर्राष्ट्रीय दान</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        अंतर्राष्ट्रीय दाताओं के लिए, किसी भी वैध रिफंड (जैसे डुप्लिकेट भुगतान)
                                        को भारतीय रुपये (INR) में संसाधित किया जाएगा।
                                        मुद्रा विनिमय शुल्क या बैंक शुल्क दाता द्वारा वहन किया जाएगा।
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">6. संपर्क जानकारी</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        यदि आपको इस नीति के संबंध में कोई प्रश्न या चिंता है, तो कृपया हमसे संपर्क करें:
                                    </p>
                                    <div className="mt-2 text-gray-700">
                                        📧 <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline">madhavamfoundation99@gmail.com</a><br />
                                        📞 +91 95208 12589
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">7. नीति में परिवर्तन</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        मधवम फाउंडेशन किसी भी समय इस रिफंड और रद्दीकरण नीति को संशोधित या अपडेट करने का अधिकार रखता है।
                                        परिवर्तन इस पेज पर अद्यतन "प्रभावी तिथि" के साथ प्रकाशित किए जाएंगे।
                                    </p>
                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        <strong>प्रभावी तिथि:</strong> 11 अक्टूबर, 2025
                                    </p>
                                </section>
                            </>
                        ) : (
                            <>
                                {/* English Version */}
                                <p className="text-gray-600 leading-relaxed">
                                    This <strong>Refund and Cancellation Policy</strong> applies to all donations made to
                                    <strong> Madhavam Foundation</strong> through our official website
                                    (<a href="https://www.madhavamfoundation.com" className="text-blue-600 hover:underline ml-1">
                                        https://www.madhavamfoundation.com
                                    </a>).
                                </p>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Non-Refundable Donations</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        All donations made to <strong>Madhavam Foundation</strong> are final and non-refundable.
                                        Once a donation is successfully processed through our payment gateway (<strong>Razorpay</strong>),
                                        it cannot be cancelled, refunded, or transferred for any reason.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-2">
                                        Donors are therefore requested to verify all details carefully before confirming a donation.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Duplicate Transactions</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        In case of a duplicate donation or accidental multiple payments made due to a technical glitch
                                        or human error, please notify us immediately at
                                        <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline ml-1">
                                            madhavamfoundation99@gmail.com
                                        </a>.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-2">
                                        After verification, if the claim is found valid, the excess amount will be refunded within
                                        <strong> 7–10 working days</strong> via the original payment method.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Transaction Failures</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        If your payment fails but the amount is deducted from your bank account, it is generally
                                        refunded automatically by your bank or payment gateway within a few working days.
                                        If the refund is not received, please contact your bank or email us with your transaction details
                                        for assistance.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Donation Receipt / Acknowledgement</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Every successful donation made through our website will receive a digital receipt via the
                                        donor’s registered email. This receipt serves as official proof of donation and should be
                                        retained for your records.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">5. International Donations</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        For international donors, refunds (if applicable for duplicate transactions) will be
                                        processed in INR, and currency conversion charges or international bank fees may apply.
                                        These are borne by the donor.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Contact Information</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        If you have any questions or concerns regarding this policy, please reach out to us at:
                                    </p>
                                    <div className="mt-2 text-gray-700">
                                        📧 <a href="mailto:madhavamfoundation99@gmail.com" className="text-blue-600 hover:underline">madhavamfoundation99@gmail.com</a><br />
                                        📞 +91 95208 12589
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Policy Updates</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Madhavam Foundation reserves the right to modify or update this Refund & Cancellation Policy
                                        at any time. Changes will be posted on this page with an updated “Effective Date.”
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-2">
                                        <strong>Effective Date:</strong> October 11, 2025
                                    </p>
                                </section>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RefundCancellationPage;
