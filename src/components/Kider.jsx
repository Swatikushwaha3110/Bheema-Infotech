import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif";

const Kider = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100 flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- Left Image Section -------------------- */}
          <div className="flex-1 flex justify-center">
            <img
              src={loader}
              alt="Kider Project"
              className="w-full max-w-md rounded-2xl hover:scale-105
                         transition-transform duration-500"
            />
          </div>

          {/* -------------------- Right Content Section -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">
            <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
              Smart & Fun Preschool Learning
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Kider – Modern Kindergarten & Childcare Platform
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Kider is a modern platform designed to make preschool learning fun,
              smart, and well-organized. With a colorful kid-friendly interface,
              it offers activity-based learning, class management, and digital
              communication between teachers and parents.
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
              className="mt-6 inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 
                         text-white font-semibold rounded-xl shadow-lg 
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Kider;
