import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/loadervideo.mp4";// ✅ background animation
import jobportal from "../assets/job portal.png";       // ✅ center image (replace with your logo)

const JobPortal = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

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
            <p>✅ Easy Login & Registration</p>
            <p>✅ Resume Upload & Profile Management</p>
            <p>✅ Apply Directly to Job Listings</p>
            <p>✅ Application Tracking & Notifications</p>
          </div>

          <Link
            to="https://jobportal.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
            text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Job Portal
          </Link>
        </div>

   {/* ✅ RIGHT SECTION (BACKGROUND VIDEO + CENTER IMAGE) */}
<div className="flex-1 relative flex justify-center items-center min-h-[460px] md:min-h-[550px] overflow-hidden">

  {/* ✅ Background Loader Animation */}
  <video
    src={loadervideo}
    autoPlay
    muted
    loop
    className="absolute w-[700px] h-[700px] object-contain opacity-90"
    style={{ zIndex: 1 }}
  />

  {/* ✅ Center Round Image */}
  <div className="relative z-10 w-[330px] h-[330px] md:w-[350px] md:h-[350px] flex items-center justify-center">
    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
      <img
        src={jobportal}
        alt="Job Portal Logo"
        className="w-[90%] h-[90%] rounded-full"
      />
    </div>
  </div>

</div>

      </div>
    </section>
  );
};

export default JobPortal;
