import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import { Loader2 } from 'lucide-react'
import React, { Suspense } from 'react'

const PrivacyPolicyPage = () => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
            </div>
        }>
            <Header />
            <div className="py-12 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader heading="Privacy Policy" />
                    <div className="mt-10 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                        <p className="text-gray-600 leading-relaxed">
                            <strong>Effective Date:</strong> October 11, 2025
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to <strong>Madhavam Foundation</strong> ("we", "our", "us").
                            We are committed to protecting your personal information and your right to privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                            (<a href="https://www.madhavamfoundation.com" className="text-blue-600 hover:underline">
                                https://www.madhavamfoundation.com
                            </a>).
                        </p>

                        {/* 1. Information We Collect */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collect personal information that you voluntarily provide when making a donation or contacting us.
                                This may include your name, email, phone number, address, city, country, pincode, date of birth,
                                donation amount, and comments.
                            </p>
                        </section>

                        {/* 2. How We Use Your Information */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-1 text-gray-600 leading-relaxed">
                                <li>To process donations securely through Razorpay</li>
                                <li>To issue invoices and donation receipts</li>
                                <li>To communicate updates or acknowledgments</li>
                                <li>To maintain legal and record-keeping compliance</li>
                            </ul>
                        </section>

                        {/* 3. Data Sharing and Security */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Data Sharing and Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We do not sell, rent, or share your data with any third parties except as required to process payments
                                through <strong>Razorpay</strong> or as mandated by law. All transactions are encrypted and handled through
                                secure servers.
                            </p>
                        </section>

                        {/* 4. Cookies */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Cookies and Tracking</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We do not use cookies, analytics, or third-party tracking tools on our website.
                            </p>
                        </section>

                        {/* 5. Data Retention */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Data Retention</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Your information is retained only as long as required for accounting, taxation, and legal compliance purposes.
                            </p>
                        </section>

                        {/* 6. International Donations */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. International Donations</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For international donors, transactions are processed in accordance with applicable
                                foreign exchange and anti-money laundering laws.
                            </p>
                        </section>

                        {/* 7. Your Rights */}
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

                        {/* 8. Updates */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Updates to This Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy periodically. The revised version will be posted on this page
                                with an updated “Effective Date.”
                            </p>
                        </section>

                        {/* 9. Contact */}
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
                    </div>
                </div>
            </div>
            <Footer />
        </Suspense>
    )
}

export default PrivacyPolicyPage
