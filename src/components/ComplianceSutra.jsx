import React from "react";
import { Link } from "react-router-dom";
import complianceimage from "../assets/COMPLIANCE.png";

const ComplianceSutra = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT: IMAGE (same style as OneSchool) */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[520px]">
          <img
            src={complianceimage}
            alt="ComplianceSutra"
            className="w-[95%] h-[95%] object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* ✅ RIGHT: TEXT CONTENT (OneSchool style) */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-cyan-600 text-lg font-semibold uppercase tracking-wide">
            ComplianceSutra • GST & Tax Compliance
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Simple, Automated & Smart GST Compliance
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            ComplianceSutra is a user-friendly platform that simplifies GST filing, invoicing,
            e-way bills, and tax management through automation. It provides a secure, fast,
            and accurate solution for businesses of all sizes.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🧾 <span className="font-semibold">Automated GST Filing & Billing</span></p>
            <p>📊 <span className="font-semibold">Real-time Tax Reports</span></p>
            <p>☁️ <span className="font-semibold">Secure Cloud Storage</span></p>
            <p>📈 <span className="font-semibold">Business-friendly Dashboard</span></p>
          </div>

          <Link
            to="https://compliancesutra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSutra;
