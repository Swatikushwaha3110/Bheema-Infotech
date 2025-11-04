import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif";

const AnyService = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* -------------------- Left Content Section -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-green-600 text-lg font-semibold uppercase tracking-wide">
            Home Services & On-Demand Booking
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            AnyService – Book Professionals Anytime, Anywhere
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            AnyService ek on-demand service booking app hai jahan users plumber, 
            electrician, carpenter, cleaner, painter jaise local professionals ko 
            instantly book kar sakte hain. Fast service, verified professionals 
            aur secure online payments ke saath.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Verified local professionals</p>
            <p>✅ Home services available anytime</p>
            <p>✅ Fast booking & real-time service status</p>
            <p>✅ Affordable pricing & secure payments</p>
          </div>

          <Link
            to="https://play.google.com/store/apps/details?id=com.services.anyservice"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-green-600 hover:bg-green-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit App
          </Link>
        </div>

        {/* -------------------- Right Image Section -------------------- */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <img
            src={loader}
            alt="AnyService App"
            className="w-full max-w-md rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default AnyService;
