import React from "react";
import card2 from "../assets/new-banner-img2.png"; 
import Selfie from "../components/Selfie";
import Rooyah from "../components/Rooyah";
import EasyStore from "../components/EasyStore";
import ApnaIndoriShop from "../components/ApnaIndoriShop";

const TwoPage = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section className="w-full bg-[#03303B] text-white px-6 md:px-12 lg:px-24 py-10 md:py-14 overflow-hidden md:h-[550px] flex items-center">

        {/* ✅ LEFT CONTENT */}
        <div className="flex flex-col text-center md:text-left max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-wide leading-tight text-teal-300">
            We Build Modern Websites
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight">
            Smart Designs, Great Results
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
            From powerful UI to smooth performance — we create websites that
            boost conversions and help your business grow faster.
          </p>

          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 active:scale-95 transition-all text-white font-semibold w-[220px] py-3 rounded-md text-base sm:text-lg mx-auto md:mx-0">
            Explore Our Services
          </button>
        </div>

        {/* ✅ RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative">
          <div className="absolute opacity-25 blur-3xl w-[750px] h-[750px] rounded-full"></div>

          <img
            src={card2}
            alt="portfolio-2"
            className="
              relative z-10
              w-[420px]
              sm:w-[520px]
              md:w-[640px]
              lg:w-[760px]
              xl:w-[880px]
              object-contain
              transition-transform duration-500 hover:scale-105
            "
          />
        </div>
      </section>

      {/* ✅ Bottom Portfolio Sections */}
      <EasyStore />
      <Selfie />
      <ApnaIndoriShop />
      <Rooyah />
    </>
  );
};

export default TwoPage;
