import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/loadervideo.mp4";   // ✅ background animated video
import fanadeshImg from "../assets/Images/19fanadesh.png"; // ✅ event website image (change path if needed)

const Fanadesh = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ✅ LEFT CONTENT (No changes) */}
        <div className="text-center md:text-left space-y-5">
          <h3 className="text-orange-600 text-lg font-semibold uppercase tracking-wide">
            Smart Festival & Ticket Booking
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Fanadesh – Digital Event Ticketing Platform
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Fanadesh is a modern and user-friendly platform for easy festival and event
            ticket booking. Users can explore events, buy passes, reserve seats, and make
            secure online payments with a smooth experience across all devices.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🎟 <span className="font-semibold">Online Festival & Event Tickets</span></p>
            <p>📅 <span className="font-semibold">Seat & Pass Management</span></p>
            <p>💳 <span className="font-semibold">Secure Online Payment Gateway</span></p>
            <p>📱 <span className="font-semibold">Fully Responsive & Easy UI</span></p>
          </div>

          <Link
            to="https://fanadesh.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700
                       text-white font-semibold rounded-xl shadow-lg
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE - Same design as KidKinder & OneSchool */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square overflow-hidden flex items-center justify-center">

            {/* ✅ Background video (loop, muted, autoplay) */}
            <video
              src={loader}
              autoPlay
              loop
              muted
              className="w-lvw h-lvh scale-110"
            />

            {/* ✅ Center Image inside video */}
            <img
              src={fanadeshImg}
              alt="Fanadesh"
              className="absolute top-1/2 left-1/2 w-[65%] h-[65%] -translate-x-1/2 -translate-y-1/2 rounded-xl z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fanadesh;
