import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/square.mp4";
import tradepluslogo from "../assets/trade plus.png";

const TradePlus = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* ✅ LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Stock Trading & Analytics
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            TradePlus – Smart Stock Market Analysis Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            TradePlus ek modern stock market platform hai jahan traders live market data,
            advanced charts, analytics aur strategies ke sath real-time me trade ko
            analyze kar sakte hain. Beginner se pro tak sab ke liye useful.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>📈 Real-time Stock Market Data</p>
            <p>📊 Advanced Chart & Technical Tools</p>
            <p>💹 Trading Strategies & Analytics</p>
            <p>⚡ Fast & User-Friendly Dashboard</p>
          </div>

          <Link
            to="https://trade-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-green-600 hover:bg-green-700 
                       text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SECTION */}
        <div className="flex-1 relative flex justify-center items-center min-h-[450px] md:min-h-[550px]">

          <video
            src={loadervideo}
            autoPlay
            muted
            loop
            className="absolute w-[200px] h-[50px] md:w-[650px] md:h-[650px] object-cover opacity-90 animate-spin-slow"
            style={{ zIndex: 1 }}
          ></video>

          {/* ✅ Bigger + Rounded Image */}
          <div className="relative z-10 flex items-center justify-center 
                w-[420px] h-[420px] rounded-3xl overflow-hidden p-2">

            <img
              src={tradepluslogo}
              alt="TradePlus Logo"
              className="w-full h-96 object-contain rounded-3xl"
            />
          </div>


        </div>

      </div>
    </section>
  );
};

export default TradePlus;
