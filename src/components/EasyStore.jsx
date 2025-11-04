import React from "react";
import { Link } from "react-router-dom";
// import loader from "../assets/Gradient Loading.gif";
import loadervideo from "../assets/loadervideo.mp4"
import storemart from "../assets/store-mart.png";

const EasyStore = () => {
  return (
    <section className="md:px-12 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Smart E-Commerce Store
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Shop Products Easily with Fast Checkout System
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            EasyStore ek modern e-commerce platform hai jahan users different
            products browse, add-to-cart kar aur online payment ke saath
            products purchase kar sakte hain. User dashboard, order history,
            secure checkout aur fast delivery ke saath shopping experience
            simple aur smooth ho jata hai.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Product Browsing & Add to Cart</p>
            <p>✅ Secure Online Checkout</p>
            <p>✅ Order Tracking & History</p>
            <p>✅ Fully Responsive Clean UI</p>
          </div>

          <Link
            to="https://easystore.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
            text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

     {/* ✅ RIGHT SECTION (VIDEO + CENTER IMAGE) */}
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
      src={storemart}
      alt="Store"
      className="w-[90%] h-[90%] object-contain rounded-full"
    />
  </div>

</div>

</div>

      </div>
    </section>
  );
};

export default EasyStore;
