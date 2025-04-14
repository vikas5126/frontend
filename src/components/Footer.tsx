import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import logo from '../assets/images/Prabhashree.png';

const Footer = () => {
  return (
    <>
      <div className="bg-white w-[80%] m-auto mt-8 h-full gap-4 flex-wrap p-4 rounded-xl flex justify-around items-center shadow-[0_15px_12px_rgba(0,0,0,0.22)]">
        <div className="flex flex-col items-center gap-2">
          <RiCustomerService2Line className="text-5xl font-normal" />
          <p className="text-base">Customer Support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RiSecurePaymentLine className="text-5xl" />
          <p className="text-base">Secure Shopping</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RiSecurePaymentLine className="text-5xl" />
          <p className="text-base">Swift Shipping</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RiSecurePaymentLine className="text-5xl" />
          <p className="text-base">Money Return</p>
        </div>
      </div>

      <div className="w-[100%] text-white bg-black mt-12 p-6 box-border">
        <div className="flex w-full box-border gap-8">
          <div className="w-[80%] items-center  m-auto sm:w-[25%] sm:items-start flex flex-col gap-4">
            <img src={logo} alt="logo" className="w-48" />
            <p>
            Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
              <a href="/about">Explore More</a>
            </p>
            <div className="flex gap-4 text-3xl mt-2">
              <i className="ri-twitter-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-linkedin-box-fill"></i>
            </div>
          </div>
          <div className="w-[25%] hidden sm:flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold">Quick Links</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Bulk Ordering</p>
            <p>Shopping</p>
          </div>
          <div className="w-[25%] hidden sm:flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold"> Account Info</p>
            <p>My Account</p>
            <p>Privacy Policy</p>
            <p>Return Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="w-[25%] hidden sm:flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold">contact Details</p>
            <p>
              <i className="ri-home-9-fill"></i> Trinagar, delhi-110035
            </p>
            <p>
              <i className="ri-mail-fill"></i> rahul251202@gmail.com
            </p>
            <p>
              <i className="ri-phone-fill"></i> +91-9835477119
            </p>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex justify-between items-center mt-4 w-[100%]">
          <div>
            <p>© 2023 Prabhashree. All rights reserved.</p>
          </div>
          <div>
            <p>Designed by Rahul Jha</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
