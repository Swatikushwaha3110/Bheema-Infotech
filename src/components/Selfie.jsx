import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/square.mp4";
import selfie from "../assets/selfie.png"

const Selfie = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- Left Image Section -------------------- */}
          <div className="flex-1 relative flex justify-center items-center min-h-[450px] md:min-h-[550px]">
        <video
        src={loadervideo}
        autoPlay
        muted
        loop
        className="absolute w-[200px] h-[50px] md:w-[650px] md:h-[650px] object-cover opacity-90 animate-spin-slow"
        style={{ zIndex: 1 }}
        ></video>
        {/* ✅ Bigger + Rounded Image */}
        <div className="relative z-10 flex items-center justify-center 
        w-[420px] h-[420px] rounded-3xl overflow-hidden p-2">
        <img
        src={selfie}
        alt="TradePlus Logo"
        className="w-full h-96 object-contain rounded-3xl"
        />
        </div>
        </div>
        
          {/* -------------------- Right Content Section -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">
            <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
              AI Powered Photo Generator
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Selfie – Create Stunning AI-generated Photos
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Selfie is a smart AI-based photo generation website where users upload images
              and instantly generate high-quality AI-transformed photos with realistic effects,
              filters, backgrounds, and styles — all in seconds.
            </p>

            <div className="space-y-2 text-gray-800 text-lg">
              <p>🤳 <span className="font-semibold">AI Photo Transformation</span></p>
              <p>🎨 <span className="font-semibold">Multiple Filters & Design Styles</span></p>
              <p>⚡ <span className="font-semibold">Instant Image Results</span></p>
              <p>📱 <span className="font-semibold">Responsive & User-Friendly UI</span></p>
            </div>

            <Link
              to="https://v0-selfie-website-rebuild.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 
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

export default Selfie;
