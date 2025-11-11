import React from "react";
import { Link } from "react-router-dom";
import jobportal from "../assets/job portal.png";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";

const JobPortal = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* ✅ LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Smart Online Job Portal
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Find Jobs, Apply Instantly & Track Applications
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            JobPortal ek smart recruitment system jahan candidates login/register
            karke profile create karte hain, resume upload karte hain aur job listings
            par direct apply kar sakte hain. Dashboard se application status easily
            check hota hai.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🧾 <span className="font-semibold">Easy Login & Registration</span></p>
            <p>📄 <span className="font-semibold">Resume Upload & Profile Management</span></p>
            <p>💼 <span className="font-semibold">Apply Directly to Job Listings</span></p>
            <p>📊 <span className="font-semibold">Application Tracking & Notifications</span></p>
          </div>

          <Link
            to="https://jobportal.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex justify-center items-center
                          w-full max-w-[480px]
                          h-[380px] md:h-[550px]">

            {/* ✅ Background Rotating Video */}
            <video
              src={canvas}
              autoPlay
              muted
              loop
              className="
                absolute 
                w-[300px] h-[300px]
                md:w-[460px] md:h-[460px]
                object-contain
                opacity-80 animate-spin-slow
              "
              style={{ zIndex: 1 }}
            ></video>

            {/* ✅ Center Image (slightly increased) */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={jobportal}
                alt="Job Portal Logo"
                className="
                  w-[250px] h-[200px]          
                  md:w-[400px] md:h-[300px]    
                  object-contain
                "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JobPortal;
