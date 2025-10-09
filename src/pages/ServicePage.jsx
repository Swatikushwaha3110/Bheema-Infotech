import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/onhire.svg";
import img2 from "../assets/Images/fixed_cost.svg";
import img3 from "../assets/Images/24-hours.svg";
import service from "../assets/Images/serimg.avif"

const Services = () => {
  const services = [
    {
      title: "Web Development",
      image: img1,
      description:
        "Custom websites with responsive design, optimized performance, and modern technologies to bring your brand online.",
    },
    {
      title: "Mobile App Development",
      image: img2,
      description:
        "Native and cross-platform mobile apps that engage users, streamline workflows, and accelerate business growth.",
    },
    {
      title: "Digital Marketing",
      image: img3,
      description:
        "SEO, social media, and content marketing strategies that boost visibility and drive measurable results.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Delivering end-to-end IT solutions that empower your business to thrive in
            the digital world.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-20 pb-16 bg-white text-gray-900 rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-96 bg-white p-10 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-blue-600 transition-all duration-500 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-28 h-28 mb-6 object-contain"
              />
              <h3 className="text-gray-900 text-2xl font-bold mb-3 group-hover:text-white">{service.title}</h3>
              <p className="text-lg leading-relaxed text-gray-900 group-hover:text-white">
                {service.description}
              </p>
              <div className="w-16 h-1 bg-yellow-400 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Value Section */}
      <section className="pb-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
         <img
              src={service}
           alt="Our Expertise"
            className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
            />
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              We Deliver Quality & Innovation
            </h2>
            <p className="text-gray-950 text-lg font-bold leading-relaxed">
              Every service we offer is built on a foundation of innovation, integrity,
              and excellence. Our experts combine creativity with cutting-edge technology
              to provide solutions that truly make a difference.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Partner with Bheema Infotech to build dynamic, scalable, and future-ready
            digital solutions for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-12 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
