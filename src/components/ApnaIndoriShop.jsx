import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/loadervideo.mp4"
import apnaindori from "../assets/apnaindori.png";

const ApnaIndoriShop = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-white flex items-center justify-between">

        {/* -------------------- LEFT IMAGE SECTION -------------------- */}
    <div className="flex-1 relative flex justify-center items-center min-h-[500px] md:min-h-[600px] overflow-hidden">
    
      {/* ✅ Background Video Full Size */}
      <video
        src={loadervideo}
        autoPlay
        muted
        loop
        className="absolute w-[700px] h-[700px] object-cover opacity-90 animate-spin-slow"
        style={{ zIndex: 1 }}
      ></video>
    
      {/* ✅ Image EXACT center of video */}
    <div className="relative z-10 w-[350px] h-[350px] md:w-[330px] md:h-[330px] flex items-center justify-center">
    
      <div className="w-[300px] h-[300px] md:w-[330px] md:h-[330px] rounded-full flex items-center justify-center">
        <img
          src={apnaindori}
          alt="Store"
          className="w-[90%] h-[90%] object-contain rounded-full"
        />
      </div>
    
    </div>
    
    </div>
    

        {/* -------------------- RIGHT TEXT SECTION -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">

          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            E-Commerce Platform
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Local Online Shopping Made Easy
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Apna Indori Shop ek local online shopping platform hai jahan users 
            grocery, fruits, vegetables, household items aur daily essentials 
            ghar baithe order kar sakte hain. Fast delivery aur cashless payment 
            options ke saath shopping simple aur hassle-free ho jati hai.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Grocery & Daily Essentials</p>
            <p>✅ Fast Home Delivery</p>
            <p>✅ Secure Online Payments</p>
            <p>✅ Easy Add-to-Cart & Checkout</p>
          </div>

          <Link
            to="https://apnaindorishop.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Website
          </Link>

        </div>

      </section>
    </>
  );
};

export default ApnaIndoriShop;
