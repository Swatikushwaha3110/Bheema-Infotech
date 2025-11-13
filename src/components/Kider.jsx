import React from "react";
import { Link } from "react-router-dom";
import kiderimg from "../assets/Images/18kider.png"; // ✅ correct image yaha lagana

const Kider = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE IMAGE (Same like OneSchool) */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[600px]">
          <img
            src={kiderimg}
            alt="Kider"
            className="w-[95%] h-[100%] object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Smart & Fun Preschool Learning
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Kider – Modern Kindergarten & Childcare Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Kider is a modern platform designed to make preschool learning fun, smart,
            and engaging. With a colorful kid-friendly interface, it offers activity-based
            learning, class management, and digital communication between teachers and parents.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🎨 <span className="font-semibold">Kid-Friendly Animated UI</span></p>
            <p>📅 <span className="font-semibold">Class & Event Management</span></p>
            <p>👨‍👩‍👧 <span className="font-semibold">Parent–Teacher Communication</span></p>
            <p>📚 <span className="font-semibold">Activity-Based Fun Learning</span></p>
          </div>

          <Link
            to="https://kider.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Kider;
