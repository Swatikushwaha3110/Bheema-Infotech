import React from "react";
import { Link } from "react-router-dom";
// import loader from "../assets/Gradient Loading.gif";
// import loader1 from "../assets/NFC Card Read!.gif";
// import loader2 from "../assets/plux_loader_2.gif"
import loader3 from "../assets/loader.gif"
import oneSchool from "../assets/oneschool.png"

const OneSchool = () => {
  return (
   <>
    <section className="py-16 md:px-12 lg:px-24 flex items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* -------------------- Left Image Section -------------------- */}
        <div className="flex-1 flex justify-center ">
       <img
  src={loader3}
  alt="OneSchool Project"
  className="w-full rounded-2xl hover:scale-105 
             transition-transform duration-500 mix-blend-multiply"
         
/>
{/* <img src={oneSchool}/> */}

        </div>

        {/* -------------------- Right Content Section -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Learn. Grow. Achieve.
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            OneSchool – Complete School Management System
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            OneSchool is an all-in-one platform for managing school operations efficiently.
            It simplifies attendance tracking, exam results, fee management, and
            parent-teacher communication with an intuitive interface and smart analytics.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>
              🏫{" "}
              <span className="font-semibold">
                Student, Teacher & Admin Portals
              </span>
            </p>
            <p>
              📊{" "}
              <span className="font-semibold">
                Attendance, Fees & Exam Management
              </span>
            </p>
            <p>
              📱{" "}
              <span className="font-semibold">
                Responsive Dashboard with Analytics
              </span>
            </p>
          </div>

          <Link
            to="https://oneschool.bheemainfotech.in/"
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

export default OneSchool;
