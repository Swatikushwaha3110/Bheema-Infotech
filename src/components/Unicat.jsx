import React from "react";
import unicat from "../assets/Images/15unicat.png";

const Unicat = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-indigo-600 text-lg font-semibold uppercase tracking-wide">
            Empowering Education Through Technology
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Unicat – Smart Learning Platform
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Unicat is an innovative e-learning platform designed to make online 
            education seamless and engaging. It provides intuitive dashboards,
            real-time analytics, and a smooth user experience across all devices.
          </p>
          <div className="space-y-2 text-gray-800 text-lg">
            <p>💻 <span className="font-semibold">Agile Development, UI/UX & QA</span></p>
            <p>🚀 <span className="font-semibold">Digital Marketing & SEO Optimization</span></p>
            <p>🧠 <span className="font-semibold">Artificial Intelligence Integration</span></p>
          </div>
          <a
            href="https://unicat.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </a>
        </div>

        {/* RIGHT SIDE: Center Image */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[520px]">
          <img
            src={unicat}
            alt="Unicat"
            className="w-[95%] h-[95%] object-contain rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Unicat;
