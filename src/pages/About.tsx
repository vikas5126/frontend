import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import section4Image from "../assets/images/rachael-gorjestani-evsoUV1EyXY-unsplash.jpg";
import commentImage from "../assets/images/testimonialImg.png";


const comments = [
  {
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐⭐',
  },
  {
    name: "Jane Smith",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      star: '⭐⭐⭐⭐',
  },
  {
    name: "Alice Johnson",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐',
  },
  {
    name: "Bob Brown",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐⭐',
  },
  {
    name: "Charlie Green",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      star: '⭐⭐⭐⭐⭐',
  },
  {
    name: "David White",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐',
  },
  {
    name: "Eve Black",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    star: '⭐⭐⭐⭐⭐',
  }
]


const About = () => {
  return (
 <>
    <Navbar />

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div >
        <img src={section4Image} alt="coverimage" className="aspect-16/9 object-cover rounded-xl"/>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg font-semibold text-red-900 mb-4">
            Amrit store brings you a collection of carefully selected foods from India and across the world.
          </p>
          <p className="text-gray-700 mb-3">
            In our passionate search to offer food that is unique and full of health, we have ensured you get only the best products. 
            Our products are well-loved for their quality and taste.
          </p>
          <p className="text-gray-700 mb-3">
            We have gained expertise in fine Indian food products and food ingredients across categories - Dry Fruits, Chocolates, Gift Boxes and Spices.
          </p>
          <p className="text-gray-700">
            We are importing fine quality Nuts, dry fruits and drinks from the source from which they are available at their best. 
            We are sure you will find our quality products appetizing.
          </p>
        </div>

        <div className=" w-[100%]  overflow-x-scroll flex justify-around items-center pl-4 mt-8 md:mt-2 md:ml-12 box-border gap-4 h-[18rem]">
          {comments.map((comment, index) => {
            return (
              <div key={index} className="w-[90%] p-4 flex justify-center items-center shrink-0 border-2 border-gray-300 rounded-xl shadow-[0_15px_12px_rgba(0,0,0,0.22)] h-[15rem]">
              
                <div className="flex flex-col justify-center items-center gap-6">
                  <p className="text-lg md:text-xl font-semibold text-center underline">{comment.name}</p>
                  <p className="text-sm md:text-md text-center">{comment.comment}</p>
                  <p className="text-sm md:text-md text-center mt-[-1rem]">{comment.star}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
   

    <Footer />
 </>
  );
};

export default About;