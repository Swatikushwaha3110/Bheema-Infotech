import React from "react";
import Selfie from "../components/Selfie";
import Rooyah from "../components/Rooyah";
import ApnaIndoriShop from "../components/ApnaIndoriShop";
import Housiey from "../components/Housiey";
import hero2 from "../assets/Images/hero2.png";
import Tripzy from "../components/Tripzy";
import EasyStore from "../components/EasyStore";
import JobPortal from "../components/JobPortal";
import { Link } from "react-router-dom";


const TwoPage = () => {
  return (
    <>
      {/* ✅ HERO SECTION (Same like OnePage) */}
      <section className="w-full bg-[#03303B] text-white px-6 md:px-10 lg:px-16 py-10 md:py-14 overflow-hidden md:h-[550px] flex items-center justify-between">

        {/* ✅ LEFT CONTENT (Same Layout) */}
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
          <Link to="/contact"
  className="inline-block mt-6 bg-red-600 hover:bg-red-700 active:scale-95 
             transition-all duration-200 text-white font-semibold 
             w-[220px] py-3 rounded-lg text-base sm:text-lg 
             text-center shadow-md hover:shadow-lg"
>   Explore Our Services
</Link>
        </div>

        {/* ✅ RIGHT IMAGE (Exact Like OnePage) */}
        <div className="flex-1 flex justify-end items-center pr-2 md:pr-6 lg:pr-10">
          <img
            src={hero2}
            alt="portfolio-2"
            className="
              w-full
              max-w-[720px]
              object-contain
              transition-transform duration-500 hover:scale-105
            "
          />
        </div>
      </section>

      {/* ✅ Bottom Portfolio Sections */}
      
       <Tripzy />
      <Selfie />
      <ApnaIndoriShop />
      <Rooyah />
      <Housiey />
      <EasyStore/>
        <JobPortal/>
    
    </>
  );
};

export default TwoPage;
