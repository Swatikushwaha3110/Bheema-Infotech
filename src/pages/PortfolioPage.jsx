import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import Unicat from "../components/Unicat";
import OneSchool from "../components/OneSchool";

const PortfolioPage = () => {
  return (
  <>
    <section className="bg-blue-500 py-20 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 🧩 Left Text Section */}
        <div className="flex-1 space-y-4 text-center md:text-left z-10">
          <h2 className="text-white tracking-widest font-semibold text-2xl">
            Explore Our
          </h2>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Creative Portfolio
          </h1>

          <p className="text-gray-200 text-lg leading-relaxed max-w-lg">
            We strive to deliver the best work for every single project.  
            Here’s a few of them we'd love you to see.
          </p>

          <h6 className="text-gray-300 text-base">
            Delivered{" "}
            <span className="font-bold text-indigo-400">5000+</span> projects to{" "}
            <span className="font-bold text-indigo-400">3000+</span> global clients — and counting...
          </h6>

          <button className="mt-4 px-8 py-3 bg-orange-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
            Request Free Consultation
          </button>
        </div>

        {/* 🧩 Right Image Section */}
        <div className="overflow-hidden rounded-2xl p-4 md:p-6">
          <div className="flex flex-col sm:flex-row mx-auto gap-6 justify-center">
            <a href="#_">
              <img
                src={image1}
                alt="Portfolio 1"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-6 h-90 w-150 object-cover hover:scale-110 transform origin-bottom shadow-lg hover:shadow-2xl transition-all"
              />
            </a>

            <a href="#_">
              <img
                src={image2}
                alt="Portfolio 2"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-6 h-90 w-150  object-cover hover:scale-110 transform origin-bottom shadow-lg hover:shadow-2xl transition-all"
              />
            </a>

            <a href="#_">
              <img
                src={image3}
                alt="Portfolio 3"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-6 h-90 w-150 object-cover hover:scale-110 transform origin-bottom shadow-lg hover:shadow-2xl transition-all"
              />
            </a>

            <a href="#_">
              <img
                src={image4}
                alt="Portfolio 4"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-6 h-90 w-150 object-cover hover:scale-110 transform origin-bottom shadow-lg hover:shadow-2xl transition-all"
              />
            </a>
          </div>
        </div>
      </div>
         </section>
          <Unicat/>
      <OneSchool/>
  </>
  );
};

export default PortfolioPage;