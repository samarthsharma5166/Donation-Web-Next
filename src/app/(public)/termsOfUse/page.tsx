import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import { Loader2 } from 'lucide-react'
import React, { Suspense } from 'react'

const TermsOfUsePage = () => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
            </div>
        }>
            <Header />
            <div className="py-12 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader heading="Terms of Use" />

                    <div className="mt-10 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                        {/* Intro */}
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to <strong>Madhavam Foundation</strong> ("we," "our," or "us").
                            By accessing or using our website
                            (<a href="https://www.madhavamfoundation.com" className="text-blue-600 hover:underline ml-1">
                                https://www.madhavamfoundation.com
                            </a>),
                            you agree to comply with these Terms of Use.
                            If you do not agree, please do not use our website.
                        </p>

                        {/* 1. Eligibility */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Eligibility</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By using this website, you represent that you are at least 18 years of age and have the legal
                                capacity to enter into a binding agreement. If you are using this website on behalf of another person
                                or organization, you agree that you have their authorization to do so.
                            </p>
                        </section>

                        {/* 2. Use of Website */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Use of the Website</h2>
                            <p className="text-gray-600 leading-relaxed">
                                You agree to use our website for lawful purposes only. You shall not:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-gray-600 leading-relaxed">
                                <li>Use the site for any fraudulent or unlawful purpose</li>
                                <li>Attempt to gain unauthorized access to the website or its related systems</li>
                                <li>Interfere with the proper working of the site</li>
                                <li>Engage in any conduct that may damage the reputation or goodwill of Madhavam Foundation</li>
                            </ul>
                        </section>

                        {/* 3. Donations */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Donations</h2>
                            <p className="text-gray-600 leading-relaxed">
                                All donations made through our website are voluntary and non-refundable.
                                Donations are processed securely through <strong>Razorpay</strong> and governed by their respective
                                terms and conditions. Donors will receive an electronic invoice via email upon successful payment.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">
                                By making a donation, you confirm that the funds are contributed lawfully and without any intention of receiving
                                financial or material benefit in return.
                            </p>
                        </section>

                        {/* 4. Intellectual Property */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed">
                                All content on this website, including text, images, graphics, and logos, is the property of
                                <strong> Madhavam Foundation</strong>. You may not reproduce, distribute, or use any material from this website
                                without prior written permission.
                            </p>
                        </section>

                        {/* 5. Limitation of Liability */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Madhavam Foundation shall not be held liable for any direct, indirect, or incidental loss,
                                damage, or expense resulting from the use or inability to use this website or donation services.
                                We do not warrant that the website will be error-free, uninterrupted, or free from viruses.
                            </p>
                        </section>

                        {/* 6. External Links */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. External Links</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our website may contain links to third-party sites. These are provided for convenience only.
                                We do not control or endorse the content of these websites and are not responsible for their practices or policies.
                            </p>
                        </section>

                        {/* 7. Privacy */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Privacy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Your use of this website is also governed by our
                                <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>.
                                Please review it to understand how we handle your personal data.
                            </p>
                        </section>

                        {/* 8. Modifications */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Modifications to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these Terms of Use at any time. Any changes will be effective upon
                                posting on this page with an updated “Effective Date.” Continued use of the website constitutes
                                acceptance of the revised Terms.
                            </p>
                        </section>

                        {/* 9. Governing Law */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction
                                of Indian courts.
                            </p>
                        </section>

                        {/* 10. Contact */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For any questions or concerns regarding these Terms of Use, please contact us at:
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

export default TermsOfUsePage
