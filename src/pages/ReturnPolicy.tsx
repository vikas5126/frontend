
const ReturnPolicy = () => {
  return (
    <div className="return-policy-page">
  <div className="container">
    <div className="return-policy-page max-h-screen overflow-y-auto scroll-smooth bg-[#fffaf4] text-[#3e2f1c] p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Return & Refund Policy</h1>
          <p className="text-gray-600 text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
          <p className="leading-relaxed">
            At PrabhashreeBhog, we strive to provide you with premium-quality dry fruits and exceptional service. Due to the nature of our edible products, we only accept returns or issue refunds under specific conditions as outlined below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Eligibility for Returns</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>The product received is incorrect or damaged.</li>
            <li>You notify us within <strong>48 hours</strong> of receiving the product.</li>
            <li>The item is unused and in its original packaging.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Non-Returnable Items</h2>
          <p className="leading-relaxed">
            For hygiene and safety reasons, we do not accept returns for:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Opened or consumed products</li>
            <li>Products returned after 48 hours of delivery</li>
            <li>Gift cards or promotional items</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Refund Process</h2>
          <p className="leading-relaxed">
            Once your return is inspected and approved, your refund will be processed within 5-7 business days. Refunds will be issued to the original payment method. In case of COD, we may request bank details to process the refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Shipping Charges</h2>
          <p className="leading-relaxed">
            Shipping charges (if applicable) are non-refundable unless the return is due to a mistake on our part (e.g., wrong or damaged product).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. How to Initiate a Return</h2>
          <p className="leading-relaxed">
            Please email us at <a href="mailto:support@prabhashreebhog.in" className="underline text-blue-600">support@prabhashreebhog.in</a> with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Your order ID</li>
            <li>Photographs of the damaged or incorrect item</li>
            <li>Brief description of the issue</li>
          </ul>
        </section>

        <footer className="text-center text-sm text-gray-600 pt-10">
          © {new Date().getFullYear()} PrabhashreeBhog. All rights reserved.
        </footer>
      </div>
    </div>
    {/* content */}
  </div>
</div>
  );
};

export default ReturnPolicy;
