import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif";

const ProPBX = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* -------------------- Left Content Section -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-indigo-600 text-lg font-semibold uppercase tracking-wide">
            Business Calling & Automation
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            ProPBX – Smart Cloud Telephony System
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            ProPBX is a cloud-based telephony platform for businesses to manage incoming 
            and outgoing calls, IVR automation, call routing, team extensions, and call analytics.
            Designed for companies to handle calls professionally and efficiently.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>📞 <span className="font-semibold">IVR & Call Routing System</span></p>
            <p>👨‍💼 <span className="font-semibold">Multiple Agent Extensions</span></p>
            <p>📊 <span className="font-semibold">Call Logs & Real-time Analytics</span></p>
            <p>☁️ <span className="font-semibold">100% Cloud Telephony Platform</span></p>
          </div>

          <Link
            to="https://pro-pbx.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 
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
            alt="ProPBX Website"
            className="w-full max-w-md rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default ProPBX;
