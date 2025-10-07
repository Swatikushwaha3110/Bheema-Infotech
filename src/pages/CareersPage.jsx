import React from "react";
import { Link, useParams } from "react-router-dom";

const CareersPage = () => {
  const { filter } = useParams(); // URL se filter read karenge
  const currentFilter = filter ? filter.toLowerCase() : "all";

  const jobs = [
    // IT Jobs
    {
      title: "Frontend Developer",
      description:
        "Responsible for developing and maintaining web applications with React, Tailwind CSS, and JavaScript.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
      type: "it",
    },
    {
      title: "Backend Developer",
      description:
        "Build robust and scalable backend APIs using Node.js, Express, and MongoDB.",
      location: "Indore, Madhya Pradesh",
      experience: "2-4 years",
      type: "it",
    },
    {
      title: "Full Stack Developer",
      description:
        "Design and develop both frontend and backend applications using MERN/MEAN stack.",
      location: "Indore, Madhya Pradesh",
      experience: "2-4 years",
      type: "it",
    },
    {
      title: "DevOps Engineer",
      description:
        "Manage cloud infrastructure, CI/CD pipelines, and deployment processes.",
      location: "Indore, Madhya Pradesh",
      experience: "2-5 years",
      type: "it",
    },
    {
      title: "QA Engineer",
      description:
        "Perform manual and automated testing of web and mobile applications.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
      type: "it",
    },
    // Non-IT Jobs
    {
      title: "Digital Marketing Executive",
      description:
        "Plan and execute digital marketing campaigns and SEO strategies.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
      type: "nonit",
    },
    {
      title: "HR Executive",
      description:
        "Manage recruitment, onboarding, and employee engagement activities.",
      location: "Indore, Madhya Pradesh",
      experience: "2-4 years",
      type: "nonit",
    },
    {
      title: "Content Writer",
      description:
        "Create engaging and SEO-friendly content for websites, blogs, and marketing materials.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
      type: "nonit",
    },
    // Internship Jobs
    {
      title: "UI/UX Intern",
      description:
        "Assist in designing user-friendly interfaces and prototypes under supervision.",
      location: "Indore, Madhya Pradesh",
      experience: "0-1 year",
      type: "internship",
    },
    {
      title: "Web Development Intern",
      description:
        "Assist in developing front-end and back-end features using HTML, CSS, JavaScript, and React.",
      location: "Indore, Madhya Pradesh",
      experience: "0-1 year",
      type: "internship",
    },
    {
      title: "Digital Marketing Intern",
      description:
        "Support marketing campaigns, SEO optimization, and content strategy.",
      location: "Indore, Madhya Pradesh",
      experience: "0-1 year",
      type: "internship",
    },
  ];

  // Filter jobs based on URL param
  const filteredJobs =
    currentFilter === "all"
      ? jobs
      : jobs.filter((job) => job.type === currentFilter);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Join <span className="text-blue-600">Our Team</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Bheema Infotech is always looking for talented individuals who are
          passionate about technology and innovation.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="text-center mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {["all", "it", "nonit", "internship"].map((type) => (
            <Link
              key={type}
              to={`/careers/${type}`}
              className={`px-6 py-2 rounded-lg font-semibold transition border ${
                currentFilter === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {type === "nonit"
                ? "Non-IT"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </Link>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-12">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <p className="font-semibold text-gray-800 mb-2">
              <span className="text-blue-600">Location:</span> {job.location}
            </p>
            <p className="font-semibold text-gray-800 mb-4">
              <span className="text-blue-600">Experience:</span> {job.experience}
            </p>
            <a
              href="#applyForm"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </section>

      {/* Apply Form */}
      <section
        id="applyForm"
        className="container mx-auto px-6 md:px-12 lg:px-24 mt-16"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Apply for a Job
        </h2>
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

export default CareersPage;
