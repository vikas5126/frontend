import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import contactCoverImage from '../assets/images/contact.jpg'

const Contact = () => {
  return (
    <>
     <Navbar />

      {/* Banner */}
      <div className=" text-center relative text-white">
        <img src={contactCoverImage} alt="contact us" className="w-full h-full object-cover mb-4"/> 
     <div className='absolute top-[6rem] left-[9rem] '>
     <h1 className="text-6xl font-bold text-white">Contact Us</h1>
     <p className="mt-2 text-sm text-white">Home &nbsp; – &nbsp; Contact Us</p>
     </div>
      </div>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-3">
            We are here to help our customers all over the world. We would be happy to assist you.
          </p>
          <p className="text-gray-700 mb-6">
            So let us know what are your queries or what you are looking for, we will get back to you shortly.
          </p>

          <div className="bg-red-900 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">📞 Contact Us</h3>
            <p>Reach us on call/whatsapp</p>
            <p className="font-bold mt-1">+91-9835477119</p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Mobile No."
                className="w-1/2 border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Id"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
   
    <Footer/>
    </>
  );
};

export default Contact;