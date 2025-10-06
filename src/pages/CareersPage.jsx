import React from "react";

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Join <span className="text-blue-600">Our Team</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Bheema Infotech is always looking for talented individuals who are passionate about technology and innovation. Explore current openings and grow your career with us.
        </p>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Frontend Developer</h2>
          <p className="text-gray-700 mb-4">
            Responsible for developing and maintaining web applications with modern technologies such as React, Tailwind CSS, and JavaScript. Collaborate with designers and backend developers to create seamless user experiences.
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Location:</span> Indore, Madhya Pradesh
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Experience:</span> 1-3 years
          </p>
          <a
            href="#applyForm"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Backend Developer</h2>
          <p className="text-gray-700 mb-4">
            Build robust and scalable backend APIs using Node.js, Express, and MongoDB. Ensure smooth integration with frontend systems and implement security and performance best practices.
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Location:</span> Indore, Madhya Pradesh
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Experience:</span> 2-4 years
          </p>
          <a
            href="#applyForm"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Digital Marketing Executive</h2>
          <p className="text-gray-700 mb-4">
            Plan and execute digital marketing campaigns to enhance brand awareness, SEO, and lead generation. Work closely with the content team to create effective marketing strategies.
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Location:</span> Indore, Madhya Pradesh
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            <span className="text-blue-600">Experience:</span> 1-3 years
          </p>
          <a
            href="#applyForm"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Apply Form */}
      <section id="applyForm" className="container mx-auto px-6 md:px-12 lg:px-24 mt-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Apply for a Job</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your application has been submitted.");
              e.target.reset();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="mobile"
                placeholder="Contact Number"
                pattern="[6-9]{1}[0-9]{9}"
                maxLength="10"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position Applying For"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Upload Resume</label>
              <input
                type="file"
                name="resume"
                className="border border-gray-300 rounded-lg p-3 w-full"
                required
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Cover Letter (optional)"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;
