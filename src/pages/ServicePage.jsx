import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaUsersCog } from "react-icons/fa";
import {
  MdOutlineBusinessCenter,
  MdOutlineCampaign,
  MdOutlinePhoneIphone,
  MdOutlineVerified,
} from "react-icons/md";
import service from "../assets/Images/serimg.avif";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode />,
      description:
        "Custom websites with responsive design, optimized performance, and modern technologies to bring your brand online.",
    },
    {
      title: "Mobile App Development",
      icon: <MdOutlinePhoneIphone />,
      description:
        "Native and cross-platform mobile apps that engage users, streamline workflows, and accelerate business growth.",
    },
    {
      title: "Digital Marketing",
      icon: <MdOutlineCampaign />,
      description:
        "SEO, social media, and content marketing strategies that boost visibility and drive measurable results.",
    },
    {
      title: "IT Staff Augmentation",
      icon: <FaUsersCog />,
      description:
        "Scale up your tech expertise and enhance your team's capabilities with our robust IT Staff Augmentation services.",
    },
    {
      title: "Enterprise Portal Development",
      icon: <MdOutlineBusinessCenter />,
      description:
        "We offer enterprise solutions that fulfill all business needs with highly responsive and distinct features.",
    },
    {
      title: "Quality Assurance & Testing",
      icon: <MdOutlineVerified />,
      description:
        "Experienced development and testing team delivering quality-assured products, using A/B and multivariate testing to ensure smooth application performance.",
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
  className="relative group bg-white p-8 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
>
  {/* ✅ Overlay for TOP to BOTTOM effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 -translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

  <div className="relative z-10 flex flex-col items-center text-center min-h-[300px]">
    <div className="mb-6 text-6xl text-yellow-500 group-hover:text-white transition-all duration-500">
      {service.icon}
    </div>
    <h3 className="text-gray-900 text-2xl font-bold mb-3 group-hover:text-white transition-all duration-500">
      {service.title}
    </h3>
    <p className="text-lg leading-relaxed text-gray-900 group-hover:text-white transition-all duration-500">
      {service.description}
    </p>
    <div className="w-16 h-1 bg-yellow-400 mt-6 rounded-full group-hover:bg-white transition-all duration-500"></div>
  </div>
</div>



          ))}
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
