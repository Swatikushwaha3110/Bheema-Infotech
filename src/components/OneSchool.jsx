import React from "react";
import { Link } from "react-router-dom";
import schoolimage from "../assets/Images/16oneschool.png";
import loader from "../assets/loadervideo.mp4";
import squareloader from "../assets/Opacity Square.mp4";

const OneSchool = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE – Video + Image like Unicat */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[460px] flex items-center justify-center">

          {/* ✅ Video exactly like Unicat */}
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

          {/* ✅ Center Square Image — same styling */}
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
              src={schoolimage}
              alt="OneSchool"
              className="w-[85%] h-[85%] object-contain"
            />
          </div>

        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Learn. Grow. Achieve.
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            OneSchool – Complete School Management System
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            OneSchool is an all-in-one platform for managing school operations efficiently.
            It simplifies attendance tracking, results, fee management, and parent-teacher
            communication with an intuitive interface and smart analytics.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🏫 <span className="font-semibold">Student, Teacher & Admin Portals</span></p>
            <p>📊 <span className="font-semibold">Attendance, Fees & Exam Management</span></p>
            <p>📱 <span className="font-semibold">Responsive Dashboard with Analytics</span></p>
          </div>

          <div className="mt-4">
            <Link
              to="https://oneschool.bheemainfotech.in/"
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

      </div>
    </section>
  );
};

export default OneSchool;
