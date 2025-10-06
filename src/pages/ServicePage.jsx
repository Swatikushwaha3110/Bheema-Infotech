import React from "react";
import img1 from "../assets/Images/onhire.svg";
import img2 from "../assets/Images/fixed_cost.svg";
import img3 from "../assets/Images/24-hours.svg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      image: img1,
      description:
        "Custom websites with responsive design, optimized performance, and modern technologies.",
    },
    {
      title: "Mobile App Development",
      image: img2,
      description:
        "Native and cross-platform mobile apps that engage users and drive business growth.",
    },
    {
      title: "Digital Marketing",
      image: img3,
      description:
        "SEO, social media, and content marketing strategies to increase your online visibility.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
            We offer a wide range of IT services to help your business grow, innovate, and stay ahead in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 mb-6 object-contain"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg">
            Get in touch with us and let our expert team deliver the perfect IT solution for your business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
