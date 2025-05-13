import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email or save in DB)
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="return-policy-page">
  <div className="container">
    <div className="contact-page scroll-smooth overflow-y-auto max-h-screen bg-[#fffaf4] text-[#3e2f1c] p-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-gray-700">We’d love to hear from you!</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Store</h2>
          <p>📍 PrabhashreeBhog Dryfruit Store<br />
             Tri Nagar, Delhi-110035</p>
          <p>📞 +91 9835477119</p>
          <p>✉️ rahul251202@gmail.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#3e2f1c] text-white rounded hover:bg-[#2e1f0f]"
            >
              Send
            </button>
          </form>
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

export default Contact;
