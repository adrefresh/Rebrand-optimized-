export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-white">

      {/* 70vh Grey Pattern Background Layer (like screenshot) */}
      <div className="absolute top-[-140px] left-0 w-full h-[70vh] z-0 overflow-hidden bg-[#cfcfcf]">

        {/* Pattern Layer */}
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
              This Privacy Policy describes how AdRefresh (“we”, “our”, “us”) collects,
              uses, stores, and protects personal information when you interact with
              our website, services, and communications.
            </p>
          </div>
        </div>

        {/* White Content Area */}
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Intro */}
          <div className="text-gray-700 leading-relaxed space-y-4 mb-14">
            <p>
              AdRefresh is committed to protecting your privacy and ensuring transparency
              in how your personal information is collected and used. This Privacy Policy
              explains your rights and choices with respect to your personal information.
            </p>

            <p>
              By accessing or using our website and services, you acknowledge that you
              have read and understood this Privacy Policy.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-sm border border-gray-300 border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-900 font-semibold">
                  <th className="border border-gray-300 py-4 px-4">Context</th>
                  <th className="border border-gray-300 py-4 px-4">Types of Personal Information</th>
                  <th className="border border-gray-300 py-4 px-4">Purpose of Collection & Use</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">

                <tr>
                  <td className="border border-gray-300 py-4 px-4 font-medium">
                    Client & Business Inquiries
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    Name, company name, email address, phone number, job title
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    To respond to inquiries, provide requested services, and manage
                    business relationships.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 py-4 px-4 font-medium">
                    Website Usage
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    IP address, browser type, device information, pages visited,
                    session duration
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    To analyze website performance, improve user experience, and
                    optimize content and services.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 py-4 px-4 font-medium">
                    Cookies & Tracking Technologies
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    Cookie identifiers, session data, usage analytics
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    To remember preferences, analyze traffic, measure campaign
                    effectiveness, and improve marketing performance.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 py-4 px-4 font-medium">
                    Marketing Communications
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    Name, email address, company, communication preferences
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    To send marketing updates, newsletters, and service-related
                    communications (you may opt out at any time).
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 py-4 px-4 font-medium">
                    Recruitment & Careers
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    Resume data, employment history, contact details
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    To evaluate candidates, manage recruitment processes, and
                    communicate with applicants.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-300 py-4 px-4 font-medium">
                    Security & Compliance
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    Log data, access records, audit trails
                  </td>
                  <td className="border border-gray-300 py-4 px-4">
                    To ensure platform security, prevent fraud, and comply with
                    legal and regulatory obligations.
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Additional Sections */}
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and improve our services.
                You can manage your cookie preferences through your browser
                settings or our cookie consent banner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal data against unauthorized access, loss,
                misuse, or alteration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights</h2>
              <p>
                You have the right to request access, correction, or deletion of
                your personal data, and to withdraw consent where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy or our data
                practices, please contact us at:
                <br />
                <strong>Email:</strong> contact@adrefresh.com
              </p>
            </div>
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
