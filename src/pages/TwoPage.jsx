import React from "react";
import card2 from "../assets/new-banner-img2.png"; // Add new image here
import DocBlog from "../components/DocBlog";
import Selfie from "../components/Selfie";
import ProPBX from "../components/ProPBX";
import Snix from "../components/Snix";
import TradePlus from "../components/TradePlus";
import Rooyah from "../components/Rooyah";

const TwoPage = () => {
  return (
  <>
      <section className="w-full bg-[#03303B] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold">We Build Modern Websites</h3>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 text-white">
            Smart Designs, Great Results
          </h1>

          <p className="mt-6 text-lg leading-7">
            From inspiring UI to powerful functionality, we create websites that 
            boost business growth and drive conversions with seamless user experience.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md">
            Explore Our Services
          </button>
        </div>

        {/* RIGHT IMAGE CARDS Stylish */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative group w-[300px] md:w-[420px]">
            <div className="absolute -z-10 inset-0 rounded-xl blur-xl opacity-50 bg-teal-700 group-hover:opacity-70 transition-all duration-500"></div>

            <img
              src={card2}
              alt="portfolio-2"
              className="rounded-xl shadow-2xl transform rotate-[-7deg] group-hover:rotate-[-3deg] group-hover:scale-105 transition-all duration-500 ease-out"
            />

            <div className="absolute inset-0 rounded-xl group-hover:border border-white/30 transition-all duration-500"></div>
          </div>
        </div>

      </div>
    </section>
    <DocBlog/>
    <Selfie/>
    <ProPBX/>
    <Snix/>
    <TradePlus/>
    <Rooyah/>
  </>
  );
};

export default TwoPage;
