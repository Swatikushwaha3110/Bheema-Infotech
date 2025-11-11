import React from "react";
import { Link } from "react-router-dom";
import storemart from "../assets/store-mart.png";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";

const EasyStore = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* ✅ LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Smart E-Commerce Store
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Shop Products Easily with Fast Checkout System
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            EasyStore ek modern e-commerce platform hai jahan users products
            browse kar sakte hain, add-to-cart kar sakte hain aur secure 
            online payment ke saath order place kar sakte hain. Order tracking, 
            dashboard & fast delivery ke saath shopping smooth ho jati hai.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🛒 <span className="font-semibold">Product Browsing & Add to Cart</span></p>
            <p>💳 <span className="font-semibold">Secure Online Checkout</span></p>
            <p>📦 <span className="font-semibold">Order Tracking & History</span></p>
            <p>📱 <span className="font-semibold">Fully Responsive Clean UI</span></p>
          </div>

          <Link
            to="https://easystore.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT - SAME AS SELFIE IMAGE/VIDEO SETUP */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex justify-center items-center
                          w-full max-w-[480px] 
                          h-[380px] md:h-[550px]">

            {/* ✅ Rotating Background Canvas */}
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
                src={storemart}
                alt="Store Mart"
                className="
                  w-[180px] h-[180px] 
                  md:w-[320px] md:h-[310px]
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyStore;
