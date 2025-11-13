import React from "react";
import tradeimage from "../assets/trade plus.png";

const TradePlus = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Stock Trading & Analytics
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            TradePlus – Smart Stock Market Analysis Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            TradePlus is a modern stock market platform where traders can analyze
            live market data, advanced charts, analytics, and trading strategies
            in real-time. It’s designed to be useful for everyone — from beginners
            to professional traders.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>📈 <span className="font-semibold">Real-time Stock Market Data</span></p>
            <p>📊 <span className="font-semibold">Advanced Charting & Technical Tools</span></p>
            <p>💹 <span className="font-semibold">Trading Strategies & Analytics</span></p>
            <p>⚡ <span className="font-semibold">Fast & User-Friendly Dashboard</span></p>
          </div>

          <a
            href="https://trade-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </a>
        </div>

        {/* ✅ RIGHT IMAGE */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[520px]">
          <img
            src={tradeimage}
            alt="TradePlus"
            className="w-[95%] h-[95%] object-contain rounded-2xl shadow-lg bg-white p-6"
          />
        </div>

      </div>
    </section>
  );
};

export default TradePlus;
