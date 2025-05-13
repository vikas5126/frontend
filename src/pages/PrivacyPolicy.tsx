
const PrivacyPolicy = () => {
  return (
    <div className="return-policy-page">
  <div className="container">
    {/* content */}
    <div className="privacy-policy-page max-h-screen overflow-y-auto scroll-smooth bg-[#fffaf4] text-[#3e2f1c] p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600 text-sm">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="leading-relaxed">
            At PrabhashreeBhog, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when you visit our website or make a purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name, email, and contact details</li>
            <li>Shipping and billing addresses</li>
            <li>Order history and payment information (securely processed)</li>
            <li>Cookies and usage data for website improvements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p className="leading-relaxed">
            Your information helps us fulfill orders, provide customer support, send updates, and improve your shopping experience. We never sell or share your data with unauthorized third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p className="leading-relaxed">
            We use secure protocols and encryption to protect your data. All transactions are processed via secure payment gateways and we do not store your payment details on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="leading-relaxed">
            You have the right to access, correct, or delete your personal data. To make a request, please contact us at <a href="mailto:support@prabhashreebhog.in" className="underline text-blue-600">support@prabhashreebhog.in</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this policy occasionally. All updates will be posted on this page with the revised effective date.
          </p>
        </section>

        <footer className="text-center text-sm text-gray-600 pt-10">
          © {new Date().getFullYear()} PrabhashreeBhog. All rights reserved.
        </footer>
      </div>
    </div>
  </div>
</div>
  );
};

export default PrivacyPolicy;
