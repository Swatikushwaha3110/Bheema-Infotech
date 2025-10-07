import React from "react";

const ItPage = () => {
  const itJobs = [
    {
      title: "Frontend Developer",
      description:
        "Responsible for developing and maintaining web applications with React, Tailwind CSS, and JavaScript. Collaborate with designers and backend developers to create seamless user experiences.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
    },
    {
      title: "Backend Developer",
      description:
        "Build robust and scalable backend APIs using Node.js, Express, and MongoDB. Ensure smooth integration with frontend systems and implement security and performance best practices.",
      location: "Indore, Madhya Pradesh",
      experience: "2-4 years",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          IT <span className="text-blue-600">Job Openings</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore our latest IT career opportunities at Bheema Infotech and take
          your next step in the world of technology.
        </p>
      </section>

      {/* Job Cards */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-12">
        {itJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {job.title}
            </h2>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <p className="font-semibold text-gray-800 mb-2">
              <span className="text-blue-600">Location:</span> {job.location}
            </p>
            <p className="font-semibold text-gray-800 mb-4">
              <span className="text-blue-600">Experience:</span> {job.experience}
            </p>
            <a
              href="/apply"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ItPage;
