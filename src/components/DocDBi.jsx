import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/loader.gif"; // Same image

const DocDBi = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-white flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- LEFT IMAGE SECTION -------------------- */}
          <div className="flex-1 flex justify-center">
            <img
              src={loginImg}
              alt="DocDBi Interface"
              className="w-full max-w-md rounded-2xl hover:scale-105 
                         transition-transform duration-500 mix-blend-multiply"
            />
          </div>

          {/* -------------------- RIGHT TEXT SECTION -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">

            <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
              Smart Healthcare Management
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Quick Patient Lookup & Digital Medical Records
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              DocDBi ek smart hospital management interface hai jisme doctors
              quickly patient reports, test details aur medical history ko 
              digital format mein dekh sakte hain. Fast search, secure data 
              handling, aur clean UI ke saath medical workflow smooth banta hai.
            </p>

            <div className="space-y-2 text-gray-800 text-lg">
              <p>✅ Fast patient record search</p>
              <p>✅ Clean & user-friendly interface</p>
              <p>✅ Secure digital medical history</p>
              <p>✅ Time-saving hospital workflow</p>
            </div>

            <Link
              to="https://doc-dbi.vercel.app/"
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

export default DocDBi;
