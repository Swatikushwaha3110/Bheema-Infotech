import React from "react";
import { Link } from "react-router-dom";
import erpimage from "../assets/Images/1erp.png";

const BheemaERP = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT: IMAGE */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[520px] bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={erpimage}
            alt="Bheema ERP System"
            className="w-[95%] h-[95%] object-contain"
          />
        </div>

        {/* ✅ RIGHT: TEXT CONTENT */}
        <div className="space-y-6 text-center md:text-left w-full">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            BheemaERP • Business ERP & Management System
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Complete Cloud-Based ERP Solution for Businesses
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Bheema ERP is a comprehensive business management software that includes 
            powerful modules like billing, inventory, staff management, attendance, 
            reporting, and analytics. It’s a perfect cloud-based solution designed to 
            automate and streamline business operations efficiently.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>💼 <span className="font-semibold">Billing & Invoicing System</span></p>
            <p>📦 <span className="font-semibold">Inventory & Stock Management</span></p>
            <p>👥 <span className="font-semibold">Attendance & Employee Tracking</span></p>
            <p>📊 <span className="font-semibold">Real-time Reports & Analytics</span></p>
          </div>

          <Link
            to="https://erp.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BheemaERP;
