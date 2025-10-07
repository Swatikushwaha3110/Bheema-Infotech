import React from "react";

const NonItPage = () => {
  const nonItJobs = [
    {
      title: "Digital Marketing Executive",
      description:
        "Plan and execute digital marketing campaigns to enhance brand awareness, SEO, and lead generation. Work closely with the content team to create effective marketing strategies.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
    },
    {
      title: "HR Executive",
      description:
        "Manage recruitment, onboarding, and employee engagement activities. Coordinate with department heads to fulfill staffing needs and ensure a healthy work culture.",
      location: "Indore, Madhya Pradesh",
      experience: "2-4 years",
    },
    {
      title: "Content Writer",
      description:
        "Create engaging and SEO-friendly content for websites, blogs, and marketing materials. Collaborate with designers and marketers to align content with brand goals.",
      location: "Indore, Madhya Pradesh",
      experience: "1-3 years",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Non-IT <span className="text-blue-600">Job Openings</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Join our creative and strategic Non-IT team at Bheema Infotech. Explore roles that help our organization grow beyond technology.
        </p>
      </section>

      {/* Job Cards */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-12">
        {nonItJobs.map((job, index) => (
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

export default NonItPage;
