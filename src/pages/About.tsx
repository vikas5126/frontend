import React from "react";

const About = () => {
  return (
    <div className="return-policy-page">
  <div className="container">
    <div className="about-page scroll-smooth overflow-y-auto max-h-screen p-6 bg-[#fffaf4] text-[#3e2f1c]">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">About PrabhashreeBhog</h1>
          <p className="text-lg text-gray-700">
            Pure. Premium. Prabhashree.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="leading-relaxed">
            PrabhashreeBhog began with a simple belief — that dry fruits should be more than just snacks; they should be a celebration of purity and health. Born in the heart of India, we bring handpicked almonds, cashews, raisins, pistachios and more — directly from farms to your home. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Quality Promise</h2>
          <p className="leading-relaxed">
            Every pack is a promise — no artificial polish, no shortcuts. We follow strict quality standards and sustainable sourcing to deliver only the best, naturally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>🌿 100% Natural and Fresh</li>
            <li>🛍️ Hygienic Packaging</li>
            <li>🏡 Homegrown Indian Brand</li>
            <li>🚚 Fast & Reliable Delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="leading-relaxed">
            To be the most loved dry fruit brand in India — known for purity, taste, and wellness. We’re here to make your healthy lifestyle easier, tastier, and more joyful.
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

export default About;
