  import React from "react";
  import image from "../assets/herosection1.png";
  import onepage from "../assets/onepageimage.png"
  import schoolimage from "../assets/oneschool.png"
  import Unicat from "../components/Unicat";
  import OneSchool from "../components/OneSchool";
  import KidKinder from "../components/KidKinder";
  import Fanadesh from "../components/Fanadesh";
  import Kider from "../components/Kider";
  import Housiey from "../components/Housiey";

  const OnePage = () => {
    return (
      <>
        {/* ✅ HERO SECTION */}
        <section className="w-full bg-[#03303B] text-white px-6 md:px-12 lg:px-24 py-10 md:py-14 overflow-hidden md:h-[550px] flex items-center">

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

            <button className="mt-6 bg-red-600 hover:bg-red-700 active:scale-95 transition-all text-white font-semibold w-[220px] py-3 rounded-md text-base sm:text-lg mx-auto md:mx-0">
              Request A Free Quote !
            </button>
          </div>

          {/* ✅ RIGHT IMAGE - EVEN BIGGER */}
          <div className="flex-1 flex justify-center md:justify-end items-center relative">

            {/* Bigger Glow Background */}
            <div className="absolute opacity-25 blur-3xl w-[750px] h-[750px] rounded-full"></div>

            <img
              src={onepage}
              alt="portfolio"
              className="
                relative z-10
                w-[420px]           /* ✅ Mobile */
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

        {/* ✅ WEBSITE CARDS SECTION */}
        <Unicat />
        <OneSchool />
        <KidKinder />
        <Kider />
        <Fanadesh />
        <Housiey />
      </>
    );
  };

  export default OnePage;
