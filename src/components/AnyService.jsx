import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/Images/14googleapp.png"; // replace with your service image

const AnyService = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT SIDE IMAGE */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[520px] bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={google}
            alt="AnyService App"
            className="w-[95%] h-[95%] object-contain"
          />
        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            AnyService • On-Demand Home Services
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Book Verified Professionals Anytime, Anywhere
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            AnyService is an on-demand booking app where users can instantly book 
            verified professionals such as plumbers, electricians, carpenters, 
            cleaners, and painters — ensuring a fast, reliable, and secure service experience.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>⚡ <span className="font-semibold">Instant Booking & Real-time Tracking</span></p>
            <p>👷 <span className="font-semibold">Verified Local Professionals</span></p>
            <p>💳 <span className="font-semibold">Secure Online Payments</span></p>
            <p>🏠 <span className="font-semibold">All Home Services in One App</span></p>
          </div>

          <Link
            to="https://play.google.com/store/apps/details?id=com.services.anyservice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-green-700 hover:scale-105 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AnyService;
