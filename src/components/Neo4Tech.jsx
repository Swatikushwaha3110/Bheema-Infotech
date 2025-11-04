import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif"; // same image as before

const Neo4Tech = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* -------------------- Left Content Section -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-cyan-500 text-lg font-semibold uppercase tracking-wide">
            Neo-4-Tech • Digital Engineering
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Neo4Tech — Future-Ready Web & App Solutions
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            We build high-performance web apps, scalable backend systems and stunning
            UI/UX — tuned for startups and enterprises ready to scale. Modern tools,
            secure architecture, and pixel-perfect design.
          </p>

          <div className="space-y-2 text-gray-700 text-lg">
            <p>💡 <span className="font-semibold">Web & Mobile App Development</span></p>
            <p>⚙️ <span className="font-semibold">Cloud-native Backends & APIs</span></p>
            <p>🎨 <span className="font-semibold">UI/UX & Branding</span></p>
            <p>🚀 <span className="font-semibold">SaaS & Product Engineering</span></p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Link
              to="https://neo-4-tech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-300"
            >
              Visit Live Project
            </Link>

            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-cyan-500 text-cyan-600 font-medium rounded-xl shadow-sm hover:translate-y-[-2px] transition-transform duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* -------------------- Right Image Section -------------------- */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={loader}
            alt="Neo4Tech Preview"
            className="w-full max-w-md rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Neo4Tech;
