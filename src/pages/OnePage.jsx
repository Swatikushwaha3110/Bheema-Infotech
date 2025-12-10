import React from "react";

import Unicat from "../components/Unicat";
import OneSchool from "../components/OneSchool";
import KidKinder from "../components/KidKinder";
import Fanadesh from "../components/Fanadesh";
import Kider from "../components/Kider";
import hero1 from "../assets/Images/hero1.png";
import EasyStore from "../components/EasyStore";
import AnyService from "../components/AnyService";
import { Link } from "react-router-dom";

const OnePage = () => {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section className="w-full bg-[#03303B] text-white px-6 md:px-10 lg:px-16 py-10 md:py-14 overflow-hidden md:h-[550px] flex items-center justify-between">

        {/* ✅ LEFT CONTENT */}
        <div className="flex flex-col text-center md:text-left max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-wide leading-tight text-teal-300">
            Have A Look At
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight">
            Our Portfolio
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
            We are committed to delivering the best customer experience with our
            remarkable services! Have a look at our previous work...
          </p>

     <Link
  to="/contact"
  className="inline-block mt-6 bg-red-600 hover:bg-red-700 active:scale-95 
             transition-all duration-200 text-white font-semibold 
             w-[220px] py-3 rounded-lg text-base sm:text-lg 
             text-center shadow-md hover:shadow-lg"
>
  Request A Free Quote!
</Link>

        </div>

        {/* ✅ RIGHT IMAGE (Perfect Responsive Fit + Side Gap) */}
        <div className="flex-1 flex justify-end items-center pr-2 md:pr-6 lg:pr-10">
          <img
            src={hero1}
            alt="portfolio"
            className="
              w-full
              max-w-[720px]
              object-contain
              transition-transform duration-500 hover:scale-105
            "
          />
        </div>

      </section>

      {/* ✅ WEBSITE CARDS SECTION */}
      <Unicat />
      <OneSchool />
      <KidKinder />
      <Kider />
      <Fanadesh />
  
      
    </>
  );
};

export default OnePage;
