import React from "react";
import { BiUserCheck, BiMoney, BiTimeFive, BiCog } from "react-icons/bi";

const Engagement = () => {
  const engagementModels = [
    {
      title: "On Hire",
      icon: <BiUserCheck className="text-4xl text-white" />,
      description:
        "Flexible resource hiring for clients with virtual employees across locations, managed efficiently.",
    },
    {
      title: "Fixed Cost Model",
      icon: <BiMoney className="text-4xl text-white" />,
      description:
        "Projects developed at a fixed cost with full transparency and professional project management.",
    },
    {
      title: "Bucket Hour",
      icon: <BiTimeFive className="text-4xl text-white" />,
      description:
        "Prepaid hours for flexible usage across projects, following Agile, Waterfall, and Spiral methods.",
    },
    {
      title: "Custom Engagement",
      icon: <BiCog className="text-4xl text-white" />,
      description:
        "Tailored solutions to match unique project requirements for maximum efficiency and success.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-yellow-300">Engagement Models</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Professional engagement models designed to suit your business needs and project requirements.
          </p>
        </div>
      </section>

      {/* Engagement Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform p-8 flex flex-col items-center text-center border border-gray-200"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md">
                {model.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">{model.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{model.description}</p>
              <a
                href="#contact"
                className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-[#e3efed] text-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Need Custom Engagement?
          </h2>
          <p className="text-gray-900 mb-10 text-lg">
            Contact us today and let our experts help you choose the best engagement model for your project.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-gray-900 px-12 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Engagement;
