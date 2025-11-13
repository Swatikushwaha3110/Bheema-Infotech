import React from "react";
import { Link } from "react-router-dom";
import kinder from "../assets/Images/17kidkiner.png";

const KidKinder = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Modern Preschool Management & Fun Learning
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            KidKinder – Smart Kids Learning Website
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
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

          <Link
            to="https://kidkinder.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* RIGHT SIDE IMAGE (Same Style as Unicat) */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[600px]">
          <img
            src={kinder}
            alt="KidKinder"
            className="w-[95%] h-[100%] object-contain rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default KidKinder;
