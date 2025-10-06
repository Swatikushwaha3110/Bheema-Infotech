import React from "react";
import img1 from "../assets/Images/apnaindorishop.png";
import img2 from "../assets/Images/sunfarm.jpg";
import img3 from "../assets/Images/biggestwartournaments.png";
import img4 from "../assets/Images/hs_general_store.png";

const Portfolio = () => {
  const projects = [
    { title: "Apna Indori Shop", img: img1, link: "#" },
    { title: "Sun Farm", img: img2, link: "#" },
    { title: "Biggest War Tournaments", img: img3, link: "#" },
    { title: "HS General Store", img: img4, link: "#" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-16">
      <section className="text-center mb-12 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Our <span className="text-blue-600">Portfolio</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Check out some of our recent projects where we delivered cutting-edge solutions for our clients.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay from Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  className="mt-2 inline-block bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-sm font-medium text-white shadow-md transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 text-center mt-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Want to See More?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
          We handle projects across industries. Contact us to discuss your project requirements.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
