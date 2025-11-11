import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/loader.gif";

const BheemaERP = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* ✅ LEFT IMAGE SECTION */}
        <div className="flex-1 flex justify-center">
          <img
            src={loginImg}
            alt="Bheema ERP System"
            className="w-full max-w-md rounded-2xl hover:scale-105 
                       transition-transform duration-500 mix-blend-multiply"
          />
        </div>

        {/* ✅ RIGHT TEXT SECTION */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-sm md:text-lg font-semibold uppercase tracking-wide">
            Business ERP & Management System
          </h3>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Complete ERP Solution for Business Operations
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Bheema ERP ek complete business management software hai jisme 
            billing, inventory, staff management, attendance, reporting aur 
            analytics jaise powerful modules integrated hain. Business 
            operations ko automate karne ke liye perfect cloud-based solution.
          </p>

          <div className="space-y-1 text-gray-800 text-base md:text-lg">
            <p>✅ Billing & invoicing system</p>
            <p>✅ Inventory & stock management</p>
            <p>✅ Attendance & employee tracking</p>
            <p>✅ Real-time business reports & analytics</p>
          </div>

          <Link
            to="https://erp.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BheemaERP;
