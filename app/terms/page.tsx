import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms and Conditions – Anthony Chua",
  description: "Terms and Conditions for Anthony Chua Real Estate.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <p className="mb-2 text-xs text-gray-400 uppercase tracking-widest">Legal</p>
        <h1 className="text-4xl font-medium mb-2">Terms and Conditions</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: 28 May 2026</p>

        <div className="prose prose-sm max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website located at <span className="font-medium text-[#1a1a1a]">[yourdomain.com]</span> (the &ldquo;Site&rdquo;), you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree to all of these Terms, please do not use the Site. These Terms apply to all visitors, users, and others who access or use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">2. Services</h2>
            <p>
              Anthony Chua Real Estate provides real estate advisory, property listing, and investment consultation services through the Site. All information provided is for general informational purposes only and does not constitute professional legal, financial, or investment advice. You should seek independent advice before making any property-related decisions.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of Anthony Chua Real Estate or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">4. Property Listings</h2>
            <p>
              Property listings, prices, and availability displayed on the Site are provided in good faith but may be subject to change without notice. We do not warrant the accuracy, completeness, or timeliness of any listing information. You are encouraged to verify all details independently before entering into any transaction.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Use the Site for any unlawful purpose or in violation of any applicable regulation.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its related systems.</li>
              <li>Transmit any unsolicited commercial communications via the Site.</li>
              <li>Misrepresent your identity or affiliation with any person or entity.</li>
              <li>Scrape, harvest, or systematically extract data from the Site without our express written permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">6. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Anthony Chua Real Estate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site or its content, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Malaysia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">11. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:email@anthonychua.com" className="underline text-[#1a1a1a]">
                email@anthonychua.com
              </a>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
