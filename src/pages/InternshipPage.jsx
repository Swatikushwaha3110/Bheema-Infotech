import React from "react";

const InternshipPage = () => {
  const internships = [
    {
      title: "UI/UX Design Intern",
      description:
        "Work with the design team to create user-friendly and visually appealing web and mobile interfaces. Gain hands-on experience using Figma and other design tools.",
      duration: "3 Months",
      location: "Indore, Madhya Pradesh",
    },
    {
      title: "Web Development Intern",
      description:
        "Assist in developing front-end and back-end features using HTML, CSS, JavaScript, and React. Collaborate with senior developers and learn the MERN stack.",
      duration: "3-6 Months",
      location: "Indore, Madhya Pradesh",
    },
    {
      title: "Digital Marketing Intern",
      description:
        "Support marketing campaigns, SEO optimization, and content strategy. Get exposure to Google Analytics, social media marketing, and online branding.",
      duration: "3 Months",
      location: "Indore, Madhya Pradesh",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Internship <span className="text-blue-600">Opportunities</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Start your professional journey with Bheema Infotech! Gain practical
          experience, mentorship, and the skills you need to launch your career.
        </p>
      </section>

      {/* Internship Cards */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-12">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {intern.title}
            </h2>
            <p className="text-gray-700 mb-4">{intern.description}</p>
            <p className="font-semibold text-gray-800 mb-2">
              <span className="text-blue-600">Duration:</span> {intern.duration}
            </p>
            <p className="font-semibold text-gray-800 mb-4">
              <span className="text-blue-600">Location:</span> {intern.location}
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

export default InternshipPage;
