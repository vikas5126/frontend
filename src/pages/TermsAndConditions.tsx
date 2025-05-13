import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="return-policy-page">
  <div className="container">
    {/* content */}
    <div className="terms-page max-h-screen overflow-y-auto scroll-smooth bg-[#fffaf4] text-[#3e2f1c] p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-gray-600 text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing or using the PrabhashreeBhog website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Products & Pricing</h2>
          <p className="leading-relaxed">
            All prices and product descriptions are subject to change without notice. We strive for accuracy but do not guarantee that product details or pricing are always error-free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Orders & Payments</h2>
          <p className="leading-relaxed">
            Orders placed through our website are subject to availability and confirmation. We reserve the right to refuse or cancel any order at our discretion. All payments are processed securely via trusted payment gateways.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Shipping & Delivery</h2>
          <p className="leading-relaxed">
            We offer shipping across India. Delivery timelines are estimated and may vary due to factors beyond our control. Any delays will be communicated as promptly as possible.
          </p>
        </section>

        {/* <section>
          <h2 className="text-2xl font-semibold mb-2">5. Returns & Refunds</h2>
          <p className="leading-relaxed">
            Due to the perishable nature of our products, we only accept returns for items that are damaged or incorrect. Please notify us within 48 hours of delivery to be eligible for a replacement or refund.
          </p>
        </section> */}

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on this website including logos, designs, text, and images are the property of PrabhashreeBhog. Unauthorized use or reproduction is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Nashik, Maharashtra.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
          <p className="leading-relaxed">
            For questions or concerns regarding these Terms, please contact us at:
            <br />
            📧 <a href="mailto:support@prabhashreebhog.in" className="underline text-blue-600">rahul251202@gmail.com</a>
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

export default TermsAndConditions;
