import React from "react";
import card from "../assets/new-banner-img2.png"; // Same or new image path
import Neo4Tech from "../components/Neo4Tech";
import MocProject from "../components/MocProject";
import ComplianceSutra from "../components/ComplianceSutra";
import DocDBi from "../components/DocDBi";
import AnyService from "../components/AnyService";
import BheemaERP from "../components/BheemaERP";

const ThirdPage = () => {
  return (
   <>
    <section className="w-full bg-[#03303B] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold">Transform Your Business</h3>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 text-white">
            With Powerful Websites
          </h1>

          <p className="mt-6 text-lg leading-7">
            We design and develop responsive, modern, and creative websites
            that increase customer engagement and help your business grow faster.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md">
            Let’s Build Your Project
          </button>
        </div>

        {/* RIGHT IMAGE STYLE */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative group w-[300px] md:w-[420px]">
            <div className="absolute -z-10 inset-0 rounded-xl blur-xl opacity-50 bg-teal-700 group-hover:opacity-70 transition-all duration-500"></div>

            <img
              src={card}
              alt="website"
              className="rounded-xl shadow-2xl transform rotate-[-6deg] group-hover:rotate-[-2deg] group-hover:scale-105 transition-all duration-500 ease-out"
            />

            <div className="absolute inset-0 rounded-xl group-hover:border border-white/30 transition-all duration-500"></div>
          </div>
        </div>

      </div>
    </section>
    <Neo4Tech/>
    <MocProject/>
    <ComplianceSutra/>
    <DocDBi/>
    <AnyService/>
    <BheemaERP/>
   </>
  );
};

export default ThirdPage;
