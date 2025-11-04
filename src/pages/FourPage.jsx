import React from "react";
import card from "../assets/new-banner-img2.png"; // Same / new image
import JobPortal from "../components/JobPortal";
import LootPools from "../components/LootPools";
import Tripzy from "../components/Tripzy";
import ApnaIndoriShop from "../components/ApnaIndoriShop";
import EasyStore from "../components/EasyStore";

const FourthPage = () => {
  return (
 <>
    <section className="w-full bg-[#03303B] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold">Creative Digital Solutions</h3>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 text-white">
            Branding That Stands Out
          </h1>

          <p className="mt-6 text-lg leading-7">
            We help businesses create a strong digital identity with 
            beautifully designed interfaces and smooth user experiences 
            that leave a lasting impression.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md">
            See Our Work
          </button>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative group w-[300px] md:w-[420px]">
            <div className="absolute -z-10 inset-0 rounded-xl blur-xl opacity-50 bg-teal-700 group-hover:opacity-70 transition-all duration-500"></div>

            <img
              src={card}
              alt="branding"
              className="rounded-xl shadow-2xl transform rotate-[-6deg] group-hover:rotate-[-2deg] group-hover:scale-105 transition-all duration-500 ease-out"
            />

            <div className="absolute inset-0 rounded-xl group-hover:border border-white/30 transition-all duration-500"></div>
          </div>
        </div>

      </div>
    </section>
    <JobPortal/>
    <LootPools/>
    <Tripzy/>
    <ApnaIndoriShop/>
    <EasyStore/>
 </>
  );
};

export default FourthPage;
