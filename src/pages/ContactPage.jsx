import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(data.success);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMsg(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      setErrorMsg("Server error! Please try again later.");
    }

    setLoading(false);
  };

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
          <div className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 flex items-center gap-6">
            <MdLocationOn className="text-blue-600 text-4xl transition duration-300 group-hover:text-blue-700" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Location</h3>
              <p className="text-gray-700">
                302 A, Rajat Complex, 18, Kibe Compound, Madhumilan Square, In Front of Dawa Bazar, Indore, Madhya Pradesh 452001
              </p>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-xl shadow hover:shadow-xl transition duration-300 flex items-center gap-6">
            <MdEmail className="text-blue-600 text-4xl transition duration-300 group-hover:text-blue-700" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Email</h3>
              <p className="text-gray-700">bheemainfotech@gmail.com</p>
            </div>
          </div>

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-semibold transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success & Error messages */}
            {successMsg && <p className="mt-4 text-center text-green-600 font-medium">{successMsg}</p>}
            {errorMsg && <p className="mt-4 text-center text-red-600 font-medium">{errorMsg}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
