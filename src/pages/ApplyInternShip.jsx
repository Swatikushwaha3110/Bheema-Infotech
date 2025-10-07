import React from "react";

const ApplyInternship = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-start py-16 px-4 md:px-0">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-900">
          Apply for Internship
        </h2>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Internship Application Submitted!");
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Contact Number"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="text"
            name="position"
            value="Internship"
            readOnly
            className="w-full border p-3 rounded-lg bg-gray-100"
          />

          <div>
            <label className="block mb-1 font-semibold">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Cover Letter (optional)"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyInternship;
