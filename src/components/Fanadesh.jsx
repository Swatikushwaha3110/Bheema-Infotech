import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif";

const Fanadesh = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* -------------------- Left Content Section -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-orange-600 text-lg font-semibold uppercase tracking-wide">
            Smart Festival & Ticket Booking
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Fanadesh – Digital Event Ticketing Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
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
            className="mt-6 inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* -------------------- Right Image Section -------------------- */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <img
            src={loader}
            alt="Fanadesh Website"
            className="w-full max-w-md rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Fanadesh;
