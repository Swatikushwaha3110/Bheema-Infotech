import React from "react";
import { Link } from "react-router-dom";

import About from "./AboutPage";
import Services from "./ServicePage";
import Engagement from "./EngagementPage";
import TechnicalStack from "./TechnicalPage";
import Portfolio from "./PortfolioPage";
import Contact from "./ContactPage";

import homimg from "../assets/Images/homeimg.jpg";

const HomePage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="
          relative
          h-screen
          md:min-h-screen
          flex
          items-center
          bg-cover
          bg-center
          bg-no-repeat
          text-white
        "
        style={{ backgroundImage: `url(${homimg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="
          relative
          z-10
          w-full
          max-w-7xl
          px-6 sm:px-8 md:px-12 lg:px-24
          text-center
          md:text-left
        ">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Empowering Businesses with{" "}
              <span className="text-orange-400">
                Innovative IT Solutions
              </span>
            </h1>

            <p className="mb-8 text-base sm:text-lg md:text-xl font-medium text-gray-100">
              At <span className="font-bold">Bheema Infotech</span>, we turn your
              ideas into powerful digital products.
            </p>

            <Link
              to="/about"
              className="
                inline-block
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-7
                py-3
                rounded-full
                text-base
                sm:text-lg
                font-semibold
                shadow-lg
                transition-all
                duration-300
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <About />
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <Services />
      </section>

      {/* ================= TECH STACK ================= */}
      <section id="technical" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <TechnicalStack />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
