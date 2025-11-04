import React from "react";
import { Link } from "react-router-dom";
import loadervideo from "../assets/loadervideo.mp4"; 
import compliancesutra from "../assets/COMPLIANCE.png"
import square from "../assets/Square.mp4"

const ComplianceSutra = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* -------------------- Left Content Section -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-cyan-500 text-lg font-semibold uppercase tracking-wide">
            ComplianceSutra • GST & Tax Compliance
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Simple, Automated & Smart GST Compliance
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            ComplianceSutra ek user-friendly platform hai jo GST filing,
            invoicing, e-way bills aur tax management ko automated aur hassle-free
            banata hai. Businesses ke liye secure, fast aur accurate solutions.
          </p>

          <div className="space-y-2 text-gray-700 text-lg">
            <p>✅ Automated GST Filing & Billing</p>
            <p>✅ Real-time Tax Reports</p>
            <p>✅ Secure Cloud Storage System</p>
            <p>✅ Business-friendly Dashboard</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Link
              to="https://compliancesutra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 
                         text-black font-semibold rounded-xl shadow-lg 
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>

            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-cyan-500 text-cyan-600 
                         font-medium rounded-xl shadow-sm hover:translate-y-[-2px] 
                         transition-transform duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* -------------------- Right Image Section -------------------- */}
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
                src={compliancesutra}
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

export default ComplianceSutra;
