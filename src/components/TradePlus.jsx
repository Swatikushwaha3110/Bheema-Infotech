import React from "react";
import { Link } from "react-router-dom";
import tradepluslogo from "../assets/trade plus.png";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";

const TradePlus = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-white flex justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl w-full">

        {/* ✅ LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Stock Trading & Analytics
          </h3>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            TradePlus – Smart Stock Market Analysis Platform
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            TradePlus ek modern stock market platform hai jahan traders live
            market data, advanced charts, analytics aur strategies ke sath
            real-time me trade ko analyze kar sakte hain. Beginner se pro tak
            sab ke liye useful.
          </p>

          <div className="space-y-2 text-gray-800 text-base md:text-lg">
            <p>📈 Real-time Stock Market Data</p>
            <p>📊 Advanced Chart & Technical Tools</p>
            <p>💹 Trading Strategies & Analytics</p>
            <p>⚡ Fast & User-Friendly Dashboard</p>
          </div>

          <Link
            to="https://trade-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SECTION */}
        <div className="flex-1 relative flex justify-center items-center min-h-[420px] md:min-h-[520px]">

          {/* ✅ Animated Background Video */}
          <video
            src={canvas}
            autoPlay
            muted
            loop
            className="
              absolute
              w-[260px] h-[260px]
              md:w-[440px] md:h-[440px]
              object-contain
              opacity-90
              animate-spin-slow
              drop-shadow-[0_0_35px_rgba(0,0,0,0.4)]
              blur-[0.5px]
            "
            style={{ zIndex: 1 }}
          ></video>

          {/* ✅ Center Logo */}
          <img
            src={tradepluslogo}
            alt="TradePlus Logo"
            className="
              relative z-10
              w-[170px] h-[220px]
              md:w-[300px] md:h-[380px]
              object-contain
              drop-shadow-xl
            "
          />
        </div>

      </div>
    </section>
  );
};

export default TradePlus;
