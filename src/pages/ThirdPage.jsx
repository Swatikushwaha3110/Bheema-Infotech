import React from "react";
import hero3 from "../assets/Images/hero3.png";
import ComplianceSutra from "../components/ComplianceSutra";
import AnyService from "../components/AnyService";
import BheemaERP from "../components/BheemaERP";
import TradePlus from "../components/TradePlus";
import JobPortal from "../components/JobPortal";
import Snix from "../components/Snix";
import Tripzy from "../components/Tripzy";
import { Link } from "react-router-dom";

const ThirdPage = () => {
  return (
    <>
      {/* ✅ HERO SECTION (Styled like TwoPage) */}
      <section className="w-full bg-[#03303B] text-white px-6 md:px-10 lg:px-16 py-10 md:py-14 overflow-hidden md:h-[550px] flex items-center justify-between">

        {/* ✅ LEFT CONTENT */}
        <div className="flex flex-col text-center md:text-left max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] z-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold tracking-wide text-teal-300">
            Transform Your Business
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight">
            With Powerful Websites
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
            We design and develop responsive, modern, and creative websites
            that increase customer engagement and help your business grow faster.
          </p>
           <Link to="/contact"
  className="inline-block mt-6 bg-red-600 hover:bg-red-700 active:scale-95 
             transition-all duration-200 text-white font-semibold 
             w-[220px] py-3 rounded-lg text-base sm:text-lg 
             text-center shadow-md hover:shadow-lg"
>
  Let’s Build Your Project
</Link>
        </div>

        {/* ✅ RIGHT IMAGE (same responsive hover style as TwoPage) */}
        <div className="flex-1 flex justify-end items-center pr-2 md:pr-6 lg:pr-10">
          <img
            src={hero3}
            alt="hero3"
            className="w-full max-w-[720px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* ✅ PORTFOLIO COMPONENTS BELOW */}
      <ComplianceSutra />
      <TradePlus />    
      <BheemaERP />
       <Snix />
       <AnyService/>
       

    </>
  );
};

export default ThirdPage;
