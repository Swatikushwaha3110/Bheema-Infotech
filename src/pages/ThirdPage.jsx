import React from "react";
import { Link } from "react-router-dom";

import ComplianceSutra from "../components/ComplianceSutra";
import AnyService from "../components/AnyService";
import BheemaERP from "../components/BheemaERP";
import TradePlus from "../components/TradePlus";
import Snix from "../components/Snix";

const ThirdPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="
          w-full
          bg-[#03303B]
          text-white
          px-6 md:px-10 lg:px-16
          py-10 md:py-12
          min-h-[260px] md:min-h-[300px]
          flex
          items-center
          justify-center
          text-center
        "
      >
        <div className="max-w-[760px]">

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-teal-300">
            Transform Your Business
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
            With Powerful Websites
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            We design and develop responsive, modern, and creative websites
            that increase customer engagement and help your business grow faster.
          </p>

          <Link
            to="/contact"
            className="
              inline-block
              mt-6
              bg-red-600
              hover:bg-red-700
              active:scale-95
              transition-all
              duration-200
              text-white
              font-semibold
              px-7
              py-2.5
              rounded-lg
              text-sm sm:text-base
              shadow-md
              hover:shadow-lg
            "
          >
            Let’s Build Your Project
          </Link>

        </div>
      </section>

      {/* ================= PORTFOLIO COMPONENTS ================= */}
      <ComplianceSutra />
      <TradePlus />
      <BheemaERP />
      <Snix />
      <AnyService />
    </>
  );
};

export default ThirdPage;
