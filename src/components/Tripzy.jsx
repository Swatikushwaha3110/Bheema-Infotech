import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/loadervideo.mp4"; // ✅ video
import tripzylogo from "../assets/Tripzy.png";   // ✅ center image

const Tripzy = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* ✅ LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Smart Travel Booking System
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Book Trips, Hotels & Manage Travel Plans Easily
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Tripzy ek online travel booking platform hai jahan users flights,
            hotels, holiday packages, bus tickets, aur travel plans book kar
            sakte hain. Secure payment system, user dashboard aur booking
            history travel ko simple aur smooth banata hai.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Easy Travel & Hotel Booking</p>
            <p>✅ Booking History & Invoices</p>
            <p>✅ Secure Online Payments</p>
            <p>✅ User-Friendly Dashboard</p>
          </div>

          <Link
            to="https://tripzy.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
            text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SECTION (BACKGROUND VIDEO + CENTER IMAGE) */}
        <div className="flex-1 relative flex justify-center items-center min-h-[500px] md:min-h-[600px] overflow-hidden">

          {/* ✅ Background Video */}
          <video
            src={loadervideo}
            autoPlay
            muted
            loop
            className="absolute w-[700px] h-[700px] object-cover opacity-90 animate-spin-slow"
            style={{ zIndex: 1 }}
          />

          {/* ✅ Center Round Image */}
          <div className="relative z-10 w-[350px] h-[350px] md:w-[330px] md:h-[330px] flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[330px] md:h-[330px] rounded-full flex items-center justify-center">
              <img
                src={tripzylogo}
                alt="Tripzy Logo"
                className="w-[90%] h-[90%] object-contain rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tripzy;
