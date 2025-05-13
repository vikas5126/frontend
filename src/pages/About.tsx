import React from "react";


const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <header className="about-header">
            <h1>About PrabhashreeBhog</h1>
            <p className="tagline">Pure. Premium. Prabhashree.</p>
          </header>

          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              PrabhashreeBhog began with a simple belief — that dry fruits should be more than just snacks;
              they should be a celebration of purity and health. Born in the heart of India, we bring
              handpicked almonds, cashews, raisins, pistachios, and more — directly from farms to your home.
            </p>
          </section>

          <section className="about-section">
            <h2>Quality Promise</h2>
            <p>
              Every pack is a promise — no artificial polish, no shortcuts. We follow strict quality standards
              and sustainable sourcing to deliver only the best, naturally.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🌿 100% Natural and Fresh</li>
              <li>🛍️ Hygienic Packaging</li>
              <li>🏡 Homegrown Indian Brand</li>
              <li>🚚 Fast & Reliable Delivery</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              To be the most loved dry fruit brand in India — known for purity, taste, and wellness. We’re
              here to make your healthy lifestyle easier, tastier, and more joyful.
            </p>
          </section>

          <footer className="about-footer">
            © {new Date().getFullYear()} PrabhashreeBhog. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
