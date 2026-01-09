import React from "react";
import card from "../assets/new-banner-img2.png"

const HeroSection = () => {
  return (
    <section className="w-full bg-[#03303B] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold">Have A Look At</h3>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 text-white">Our Portfolio</h1>

          <p className="mt-6 text-lg leading-7">
            We are committed to delivering the best customer experience with our
            remarkable services! Have a look at our previous work...
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md">
            Request A Free Quote !
          </button>
        </div>

       {/* RIGHT IMAGE CARDS Stylish Design */}
<div className="relative flex-1 flex justify-center items-center">

  <div className="relative group w-[300px] md:w-[420px]">
    {/* Card Shadow Behind */}
    {/* <div className="absolute -z-10 inset-0 rounded-xl blur- xl opacity-50 bg-teal-700 group-hover:opacity-70 transition-all duration-500"></div> */}

    {/* Actual Image */}
    <img 
      src={card} 
      alt="portfolio" 
    />

    {/* Light highlight on hover */}
    <div className="absolute inset-0 rounded-xl group-hover:border border-white/30 transition-all duration-500"></div>
  </div>

</div>


      </div>
    </section>
  );
};

export default HeroSection;
