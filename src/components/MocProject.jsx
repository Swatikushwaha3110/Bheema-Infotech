import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/loader.gif"; // Same image

const MocProject = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-white flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- LEFT IMAGE SECTION -------------------- */}
          <div className="flex-1 flex justify-center">
            <img
              src={loginImg}
              alt="MOC Project Interface"
              className="w-full max-w-md rounded-2xl hover:scale-105 
                         transition-transform duration-500 mix-blend-multiply"
            />
          </div>

          {/* -------------------- RIGHT TEXT SECTION -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">

            <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
              Professional Web UI Design
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              A clean and modern business website layout
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              MOC Project ek modern web UI design hai jisme clean layout,
              responsive sections, icons, info cards aur smooth styling
              use ki gayi hai. Business branding aur service presentation
              ke liye perfect UI structure.
            </p>

            <div className="space-y-2 text-gray-800 text-lg">
              <p>✅ Responsive premium layout</p>
              <p>✅ Clean info sections & icons</p>
              <p>✅ Smooth modern UI styling</p>
              <p>✅ Mobile-friendly experience</p>
            </div>

            <Link
              to="https://moc-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                         text-white font-semibold rounded-xl shadow-lg 
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default MocProject;
