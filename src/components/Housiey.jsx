import React from "react";
import { Link } from "react-router-dom";
import housiey from "../assets/HOUSIEY.png"
import loadervideo from "../assets/loadervideo.mp4";// ✅ background animation

const Housiey = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100 flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- Left Image Section -------------------- */}
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
            src={housiey}
            alt="Store"
            className="w-[90%] h-[90%] object-contain rounded-full"
          />
        </div>
      
      </div>
      
      </div>

          {/* -------------------- Right Content Section -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">
            <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
              Verified Homes. Smart Buying.
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Housiey – Mumbai Real Estate Buying Platform
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Housiey helps home buyers discover verified properties in Mumbai with 
              transparent pricing, zero brokerage, expert assistance and real-time updates. 
              A trusted platform for buying homes with confidence.
            </p>

            <div className="space-y-2 text-gray-800 text-lg">
              <p>🏠 <span className="font-semibold">Verified Real Estate Listings</span></p>
              <p>📍 <span className="font-semibold">Location-wise Property Comparisons</span></p>
              <p>💰 <span className="font-semibold">Zero Brokerage Buying Experience</span></p>
              <p>📊 <span className="font-semibold">Price Trends & Builder Reviews</span></p>
            </div>

            <Link
              to="https://housiey.com/mumbai-real-estate"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                         text-white font-semibold rounded-xl shadow-lg 
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Housiey;
