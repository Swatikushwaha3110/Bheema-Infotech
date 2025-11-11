import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif";

const AnyService = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* ✅ LEFT TEXT SECTION */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-green-600 text-sm md:text-lg font-semibold uppercase tracking-wide">
            Home Services & On-Demand Booking
          </h3>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            AnyService – Book Professionals Anytime, Anywhere
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            AnyService ek on-demand service booking app hai jahan users plumber, 
            electrician, carpenter, cleaner, painter jaise local professionals ko 
            instantly book kar sakte hain. Fast service, verified professionals 
            aur secure online payments ke saath.
          </p>

          <div className="space-y-1 text-gray-800 text-base md:text-lg">
            <p>✅ Verified local professionals</p>
            <p>✅ Home services available anytime</p>
            <p>✅ Fast booking & real-time service status</p>
            <p>✅ Affordable pricing & secure payments</p>
          </div>

          <Link
            to="https://play.google.com/store/apps/details?id=com.services.anyservice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white 
                       font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT IMAGE SECTION */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={loader}
            alt="AnyService App"
            className="w-full max-w-md rounded-2xl hover:scale-105 
                       transition-transform duration-500 mix-blend-multiply"
          />
        </div>

      </div>
    </section>
  );
};

export default AnyService;
