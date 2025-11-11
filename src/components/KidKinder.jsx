import React from "react";
import { Link } from "react-router-dom";
import kinder from "../assets/Images/17kidkiner.png";
import squareloader from "../assets/Opacity Square.mp4";

const KidKinder = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ✅ LEFT CONTENT */}
        <div className="text-center md:text-left space-y-5">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Modern Preschool Management & Fun Learning
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            KidKinder – Smart Kids Learning Website
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            KidKinder is a creative and child-friendly platform built for preschools
            and kindergartens. Its colorful and interactive UI helps children learn
            through fun activities, while parents and teachers stay connected with
            digital communication, schedules, and class updates.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🎨 <span className="font-semibold">Animated UI for Kids Engagement</span></p>
            <p>📚 <span className="font-semibold">Activity-Based Learning Tools</span></p>
            <p>📅 <span className="font-semibold">Event Calendar & Class Management</span></p>
            <p>👨‍👩‍👧 <span className="font-semibold">Parent–Teacher Communication</span></p>
          </div>

          <div className="mt-4">
            <Link
              to="https://kidkinder.bheemainfotech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700
                         text-white font-semibold rounded-xl shadow-lg
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>
          </div>
        </div>

        {/* ✅ RIGHT - SAME STYLE AS UNICAT */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[460px] flex items-center justify-center rounded-3xl overflow-hidden">

          {/* ✅ Background Video */}
          <video
            src={squareloader}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-3xl opacity-90 scale-110"
          />

          {/* ✅ Image Box Over Video */}
          <div
            className="
              absolute
              w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48
              bg-white rounded-2xl border-4 border-white
              flex items-center justify-center
              shadow-[0_12px_30px_rgba(0,0,0,0.25)]
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            "
          >
            <img
              src={kinder}
              alt="KidKinder"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default KidKinder;
