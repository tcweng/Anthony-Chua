import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy – Anthony Chua",
  description: "Privacy Policy for Anthony Chua Real Estate.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <p className="mb-2 text-xs text-gray-400 uppercase tracking-widest">Legal</p>
        <h1 className="text-4xl font-medium mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: 28 May 2026</p>

        <div className="prose prose-sm max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">1. Introduction</h2>
            <p>
              Anthony Chua Real Estate (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit <span className="font-medium text-[#1a1a1a]">[yourdomain.com]</span> (the &ldquo;Site&rdquo;). Please read it carefully. If you disagree with its terms, please discontinue use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><span className="font-medium text-[#1a1a1a]">Identity data</span> – name, email address, phone number, and similar contact details you provide via enquiry forms or booking requests.</li>
              <li><span className="font-medium text-[#1a1a1a]">Usage data</span> – pages visited, time spent on pages, links clicked, and other browsing behaviour collected automatically via cookies and analytics tools.</li>
              <li><span className="font-medium text-[#1a1a1a]">Communications data</span> – records of any correspondence you initiate with us, including email or phone enquiries.</li>
              <li><span className="font-medium text-[#1a1a1a]">Marketing preferences</span> – your preferences for receiving marketing communications from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Respond to your enquiries and provide the services you request.</li>
              <li>Send you property listings, market updates, and promotional content where you have opted in.</li>
              <li>Improve the functionality and content of the Site through analytics.</li>
              <li>Comply with legal obligations and enforce our Terms and Conditions.</li>
              <li>Prevent fraud and ensure the security of the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on the Site. Cookies are small data files placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of the Site may not function properly.
            </p>
            <p className="mt-3">
              We use the following types of cookies:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><span className="font-medium text-[#1a1a1a]">Essential cookies</span> – required for the Site to function.</li>
              <li><span className="font-medium text-[#1a1a1a]">Analytics cookies</span> – help us understand how visitors interact with the Site.</li>
              <li><span className="font-medium text-[#1a1a1a]">Marketing cookies</span> – used to deliver relevant advertisements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">5. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Service providers who assist us in operating the Site or conducting our business, subject to confidentiality obligations.</li>
              <li>Legal authorities where required by law, court order, or government regulation.</li>
              <li>Successor entities in the event of a business merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. When data is no longer needed, it is securely deleted or anonymised.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to or restrict the processing of your data.</li>
              <li>Withdraw consent to marketing communications at any time.</li>
              <li>Lodge a complaint with a relevant data protection authority.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:email@anthonychua.com" className="underline text-[#1a1a1a]">
                email@anthonychua.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">8. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">9. Third-Party Sites</h2>
            <p>
              The Site may contain links to third-party websites. This Privacy Policy applies solely to our Site. We encourage you to review the privacy policies of any third-party sites you visit, as we have no control over their practices.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this page periodically to stay informed.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1a1a1a] mb-3">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
              <a href="mailto:email@anthonychua.com" className="underline text-[#1a1a1a]">
                email@anthonychua.com
              </a>{" "}
              or by phone at +1 (555) 234-5678.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
