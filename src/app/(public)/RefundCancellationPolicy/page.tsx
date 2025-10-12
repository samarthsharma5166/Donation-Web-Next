import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import { Loader2 } from 'lucide-react'
import React, { Suspense } from 'react'

const RefundCancellationPage = () => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
            </div>
        }>
            <Header />
            <div className="py-12 bg-gray-50 text-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionHeader heading="Refund & Cancellation Policy" />

                    <div className="mt-10 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

                        {/* Intro */}
                        <p className="text-gray-600 leading-relaxed">
                            This <strong>Refund and Cancellation Policy</strong> applies to all donations made to
                            <strong> Madhavam Foundation</strong> through our official website
                            (<a href="https://www.madhavamfoundation.com" className="text-blue-600 hover:underline ml-1">
                                https://www.madhavamfoundation.com
                            </a>).
                        </p>

                        {/* 1. Non-Refundable Donations */}
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

                        {/* 2. Duplicate Transactions */}
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

                        {/* 3. Transaction Failures */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Transaction Failures</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If your payment fails but the amount is deducted from your bank account, it is generally
                                refunded automatically by your bank or payment gateway within a few working days.
                                If the refund is not received, please contact your bank or email us with your transaction details
                                for assistance.
                            </p>
                        </section>

                        {/* 4. Receipt / Acknowledgement */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Donation Receipt / Acknowledgement</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Every successful donation made through our website will receive a digital receipt via the
                                donor’s registered email. This receipt serves as official proof of donation and should be
                                retained for your records.
                            </p>
                        </section>

                        {/* 5. International Donations */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. International Donations</h2>
                            <p className="text-gray-600 leading-relaxed">
                                For international donors, refunds (if applicable for duplicate transactions) will be
                                processed in INR, and currency conversion charges or international bank fees may apply.
                                These are borne by the donor.
                            </p>
                        </section>

                        {/* 6. Contact Information */}
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

                        {/* 7. Policy Updates */}
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

                    </div>
                </div>
            </div>
            <Footer />
        </Suspense>
    )
}

export default RefundCancellationPage
