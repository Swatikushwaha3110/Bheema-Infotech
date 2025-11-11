import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/loadervideo.mp4";
import apnaindori from "../assets/apnaindori.png";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";

const ApnaIndoriShop = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* ✅ LEFT SIDE (Content) */}
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
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE (Same as EasyStore layout) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex justify-center items-center
                          w-full max-w-[480px] 
                          h-[380px] md:h-[550px]">

            {/* ✅ Rotating Background Video */}
            <video
              src={canvas}
              autoPlay
              muted
              loop
              className="
                absolute 
                w-[260px] h-[260px]
                md:w-[550px] md:h-[550px]
                object-contain
                opacity-80 animate-spin-slow
              "
              style={{ zIndex: 1 }}
            ></video>

            {/* ✅ Center Image */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={apnaindori}
                alt="Apna Indori Shop"
                className="
                  w-[180px] h-[180px] 
                  md:w-[320px] md:h-[310px]
                  object-contain rounded-2xl
                "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApnaIndoriShop;
