import React from "react";
import { Link } from "react-router-dom";
import kiderimg from "../assets/Images/16oneschool.png"; // <-- Yaha Kider ka correct image lagana
import squareloader from "../assets/Opacity Square.mp4";

const Kider = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE – Same as OneSchool */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[460px] flex items-center justify-center">

          {/* ✅ Background video same style */}
          <video
            src={squareloader}
            autoPlay
            loop
            muted
            className="
              w-full h-full
              object-cover rounded-3xl
              opacity-90
              scale-110
            "
          />

          {/* ✅ Center square image – clear & not cut */}
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
              src={kiderimg}
              alt="Kider"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
        </div>

        {/* ✅ RIGHT CONTENT (Premium Look) */}
        <div className="text-center md:text-left space-y-5">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Smart & Fun Preschool Learning
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Kider – Modern Kindergarten & Childcare Platform
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Kider is a modern platform designed to make preschool learning fun,
            smart, and engaging. With a colorful kid-friendly interface, it offers
            activity-based learning, class management, and digital communication
            between teachers and parents.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🎨 <span className="font-semibold">Kid-Friendly Animated UI</span></p>
            <p>📅 <span className="font-semibold">Class & Event Management</span></p>
            <p>👨‍👩‍👧 <span className="font-semibold">Parent–Teacher Communication</span></p>
            <p>📚 <span className="font-semibold">Activity-Based Fun Learning</span></p>
          </div>

          <div>
            <Link
              to="https://kider.bheemainfotech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700
                         text-white font-semibold rounded-xl shadow-lg
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Kider;
