export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-white">

      {/* 70vh Grey Pattern Background Layer */}
      <div className="absolute top-[-140px] left-0 w-full h-[70vh] z-0 overflow-hidden bg-[#cfcfcf]">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "url('/images/service-page-images-videos/GrayOutline.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "1350px 770px",
          }}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10">

        {/* Hero Area */}
        <div className="h-[50vh] flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Privacy Policy
            </h1>
            <p className="text-black/80 text-lg max-w-3xl mx-auto">
              Welcome to AdRefresh. We are dedicated to protecting your privacy and ensuring
              that our services are both personalized and valuable to you.
            </p>
          </div>
        </div>

        {/* White Content Area */}
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-12 text-gray-700 leading-relaxed">

          {/* Intro */}
          <div className="space-y-4">
            <p>
              This Privacy Policy explains how we gather, utilize, and safeguard your personal
              information when you engage with our website.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>

            <p>
              <strong>Personal Information:</strong> When you fill out forms, subscribe to our
              newsletter, or contact us, we may collect personal details such as your name,
              email address, phone number, and company information.
            </p>

            <p>
              <strong>Usage Data:</strong> We may also collect data on how you interact with our
              website. This may include your IP address, browser type, device details, pages
              viewed, and the duration of your visit on each page.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>

            <p>
              <strong>Service Delivery:</strong> We use your personal information to deliver the
              services you request, address your inquiries, and enhance our offerings.
            </p>

            <p>
              <strong>Marketing Communications:</strong> With your consent, we may send you
              updates, newsletters, and marketing materials. You can opt out of receiving these
              communications at any time.
            </p>

            <p>
              <strong>Website Improvement:</strong> The usage data helps us analyze trends,
              monitor the performance of our website, and enhance your experience.
            </p>
          </div>

          {/* Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to collect and store information about
              your usage of our website. Cookies assist us in tailoring your experience and
              collecting analytical information. You can configure your browser to reject
              cookies, but this might impact your ability to access certain features on our site.
            </p>
          </div>

          {/* Data Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
            <p>
              We do not disclose, sell, or rent your personal information to third parties. We
              may share your data with trusted service providers who assist us in operating our
              website and delivering services, subject to confidentiality agreements.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal
              information. However, it's important to note that no data transmission or storage
              method is completely secure, and we cannot guarantee total security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>

            <p>
              <strong>Access and Correction:</strong> You have the right to review the personal
              information we have about you and to request any necessary updates.
            </p>

            <p>
              <strong>Data Deletion:</strong> You can request the deletion of your personal
              information from our records, subject to legal and contractual obligations.
            </p>

            <p>
              <strong>Opt-Out:</strong> You can opt out of marketing communications by following
              the unsubscribe instructions in our emails or contacting us directly.
            </p>
          </div>

          {/* Third Party Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of these external sites. We encourage you to
              review the privacy policies of any websites you visit.
            </p>
          </div>

          {/* Policy Changes */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page, and the revised date will be updated at the top of the policy. We
              encourage you to review this policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data
              handling practices, please get in touch with us at:
            </p>

            <p>
              <strong>Email:</strong> contact@adrefresh.com <br />
              <strong>Phone:</strong> +91 93923 20142
            </p>
          </div>

          {/* Footer */}
          <div className="pt-16 mt-16 border-t text-sm text-gray-500 text-center">
            {/* Last updated: {new Date().toLocaleDateString()} */}
          </div>

        </div>
      </div>
    </section>
  );
}
