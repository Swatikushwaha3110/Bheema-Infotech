import React from "react";
import About from "./AboutPage";
import Services from "./ServicePage";
import Engagement from "./EngagementPage";
import TechnicalStack from "./TechnicalPage";
import Portfolio from "./PortfolioPage";
// import BlogPage from "./BlogPage";
// import Careers from "./CareersPage";
import Contact from "./ContactPage";
import homimg from "../assets/Images/homeimg.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${homimg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-4xl px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Businesses with{" "}
            <span className="text-orange-400">Innovative IT Solutions</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl font-medium text-gray-100">
            At <span className="font-bold">Bheema Infotech</span>, we turn your ideas into powerful digital products.
          </p>
          <Link
            to="/about"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-4">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-12 lg:px-24 py-4">
        <Services />
      </section>

      {/* Engagement Section */}
      <section id="engagement" className="px-6 md:px-12 lg:px-24">
        <Engagement />
      </section>

      {/* Technical Stack Section */}
      <section id="technical" className="px-6 md:px-12 lg:px-24">
        <TechnicalStack />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 md:px-12 lg:px-24">
        <Portfolio />
      </section>

      {/* Blog Section */}
      {/* <section id="blog" className="px-6 md:px-12 lg:px-24">
        <BlogPage />
      </section> */}

      {/* Careers Section */}
      {/* <section id="careers" className="px-6 md:px-12 lg:px-24">
        <Careers />
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-24">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
