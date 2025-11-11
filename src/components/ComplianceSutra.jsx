import React from "react";
import { Link } from "react-router-dom";
import square from "../assets/Opacity Square.mp4";
import compliancesutra from "../assets/Images/COMPLIANCE SUTRA img for portfolio.png";

const ComplianceSutra = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* ✅ LEFT SIDE CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          
          <h3 className="text-cyan-500 text-sm md:text-lg font-semibold uppercase tracking-wide">
            ComplianceSutra • GST & Tax Compliance
          </h3>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Simple, Automated & Smart GST Compliance
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            ComplianceSutra ek user-friendly platform hai jo GST filing, invoicing,
            e-way bills aur tax management ko automated aur hassle-free banata hai.
            Businesses ke liye secure, fast aur accurate solution.
          </p>

          <ul className="space-y-1 text-gray-700 text-base md:text-lg">
            <li>✅ Automated GST Filing & Billing</li>
            <li>✅ Real-time Tax Reports</li>
            <li>✅ Secure Cloud Storage</li>
            <li>✅ Business-friendly Dashboard</li>
          </ul>

          <Link
            to="https://compliancesutra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE – PROFESSIONAL VIDEO + LOGO */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex justify-center items-center 
                          w-full max-w-[480px] h-[380px] md:h-[520px]">

            {/* ✅ Soft Glow Ring Behind Image */}
            <div className="
              absolute
              w-[230px] h-[230px]
              md:w-[370px] md:h-[370px]
              rounded-full
              bg-cyan-500/20
              blur-2xl
              animate-pulse
              z-0
            " />

            {/* ✅ Circular Animated Video */}
            <video
              src={square}
              autoPlay
              muted
              loop
              className="
                absolute 
                w-[260px] h-[260px]
                md:w-[420px] md:h-[420px]
                object-cover
                rounded-full
                opacity-70
                animate-spin-slow
                border-2 border-cyan-400/40
              "
              style={{ zIndex: 1 }}
            />

            {/* ✅ Center Clean Logo */}
            <img
              src={compliancesutra}
              alt="Compliance Sutra"
              className="
                relative
                z-10
                w-[180px] h-[180px]
                md:w-[260px] md:h-[260px]
                object-contain
                rounded-full
                drop-shadow-[0_0_18px_rgba(0,200,255,0.45)]
                hover:scale-105
                transition-all duration-500
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSutra;
