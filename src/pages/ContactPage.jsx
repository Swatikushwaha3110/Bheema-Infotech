import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16">
      {/* Header */}
      <section className="text-center mb-12 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Have a project or question? We'd love to hear from you. Fill out the form below and we will get back to you shortly.
        </p>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Location */}
          <div className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 flex items-center gap-6">
            <MdLocationOn className="text-blue-600 text-4xl transition duration-300 group-hover:text-blue-700" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Location</h3>
              <p className="text-gray-700">302 A, Rajat Complex, 18, Kibe Compound, Madhumilan Square, In Front of Dawa Bazar, Indore, Madhya Pradesh 452001</p>
            </div>
          </div>

          {/* Email */}
          <div className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 flex items-center gap-6">
            <MdEmail className="text-blue-600 text-4xl transition duration-300 group-hover:text-blue-700" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Email</h3>
              <p className="text-gray-700">bheemainfotech@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 flex items-center gap-6">
            <MdPhone className="text-blue-600 text-4xl transition duration-300 group-hover:text-blue-700" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Phone</h3>
              <p className="text-gray-700">+91-8770775732, +91-9770362377</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
