import React from "react";
import card from "../assets/new-banner-img2.png";
import Tripzy from "../components/Tripzy";
import Snix from "../components/Snix";
import TradePlus from "../components/TradePlus";
import JobPortal from "../components/JobPortal";
import AnyService from "../components/AnyService";


const FourthPage = () => {
  return (
    <>
      <section className="w-full bg-[#03303B] text-white px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* ✅ LEFT TEXT */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold">
              Creative Digital Solutions
            </h3>

            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Branding That Stands Out
            </h1>

            <p className="mt-6 text-base md:text-lg leading-7 opacity-90 max-w-xl mx-auto md:mx-0">
              We help businesses create a strong digital identity with beautifully
              designed interfaces and smooth user experiences that leave a lasting impression.
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 transition-all text-white font-semibold px-6 py-3 rounded-md">
              See Our Work
            </button>
          </div>

          {/* ✅ RIGHT IMAGE CARD — Responsive + Hover Effect */}
          <div className="relative flex-1 flex justify-center items-center">
            <div className="relative group w-[260px] sm:w-[300px] md:w-[420px] lg:w-[480px]">

              {/* Glow Shadow */}
              <div className="absolute -z-10 inset-0 rounded-xl blur-xl opacity-50 bg-teal-700 group-hover:opacity-70 transition-all duration-500"></div>

              {/* Main Image */}
              <img
                src={card}
                alt="branding"
                className="w-full h-auto rounded-xl shadow-2xl transform rotate-[-6deg] 
                           group-hover:rotate-[-1deg] group-hover:scale-105
                           transition-all duration-500 ease-out"
              />

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-xl group-hover:border border-white/30 transition-all duration-500"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ PROJECT COMPONENTS BELOW */}
  
      
     
    
     
   
   
    </>
  );
};

export default FourthPage;
