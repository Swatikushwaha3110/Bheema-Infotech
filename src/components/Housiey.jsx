import React from "react";
import { Link } from "react-router-dom";
import housiey from "../assets/HOUSIEY.png";
import loadervideo from "../assets/loadervideo.mp4";

const Housiey = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ✅ LEFT - Background Video + Image (Same Style as Kider) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square overflow-hidden flex items-center justify-center">
            
            <video
              src={loadervideo}
              autoPlay
              loop
              muted
              className="w-lvw h-lvh scale-110"
            />

            <img
              src={housiey}
              alt="Housiey"
              className="absolute top-1/2 left-1/2 w-[65%] h-[65%] -translate-x-1/2 -translate-y-1/2 rounded-xl z-10 object-contain"
            />
          </div>
        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Verified Homes. Smart Buying.
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Housiey – Mumbai Real Estate Buying Platform
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
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
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700
                       text-white font-semibold rounded-xl shadow-lg
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Housiey;
