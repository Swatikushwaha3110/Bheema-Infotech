import React from "react";
import { Link } from "react-router-dom";
// import loader from "../assets/Gradient Loading.gif";
import square from "../assets/Loading #59.mp4"

const Neo4Tech = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-white flex justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl w-full">

        {/* ✅ LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-cyan-500 text-lg font-semibold uppercase tracking-wide">
            Neo-4-Tech • Digital Engineering
          </h3>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Neo4Tech — Future-Ready Web & App Solutions
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            We build high-performance web apps, scalable backend systems and stunning UI/UX —
            crafted for startups & enterprises ready to scale. Modern tools, secure architecture,
            and pixel-perfect experience.
          </p>

          <div className="space-y-2 text-gray-700 text-base md:text-lg">
            <p>💡 <span className="font-semibold">Web & Mobile App Development</span></p>
            <p>⚙️ <span className="font-semibold">Cloud-Native Backends & APIs</span></p>
            <p>🎨 <span className="font-semibold">UI/UX Design & Branding</span></p>
            <p>🚀 <span className="font-semibold">SaaS Platforms & Product Engineering</span></p>
          </div>

          <Link
            to="https://neo-4-tech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700
                       text-white font-semibold rounded-xl shadow-lg
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <video
            src={square}
            alt="Neo4Tech Website Preview"
            className="w-full max-w-[380px] md:max-w-[480px] 
                       rounded-2xl shadow-md
                       hover:scale-105 transition-transform duration-500"
          />
          <img src={} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Neo4Tech;
