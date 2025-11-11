import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/loader.gif";

const MocProject = () => {
  return (
    <>
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">

          {/* ✅ LEFT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={loginImg}
              alt="MOC Project Interface"
              className="w-full max-w-sm md:max-w-md rounded-2xl 
                        hover:scale-105 transition-transform duration-500 
                        mix-blend-multiply"
            />
          </div>

          {/* ✅ RIGHT CONTENT TEXT */}
          <div className="flex-1 text-center md:text-left space-y-5">

            <h3 className="text-blue-600 text-sm md:text-lg font-semibold uppercase tracking-wide">
              Professional Web UI Design
            </h3>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              A clean and modern business website layout
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              MOC Project ek modern web UI design hai jisme clean layout,
              responsive sections, icons, info cards aur smooth styling
              use ki gayi hai. Business branding aur service presentation
              ke liye perfect UI structure.
            </p>

            <div className="text-gray-800 text-base md:text-lg space-y-1">
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
