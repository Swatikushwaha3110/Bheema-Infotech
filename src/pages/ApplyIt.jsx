import React from "react";

const ApplyIt = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-start py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for IT Job</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("IT Job Application Submitted!");
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Contact Number"
            className="w-full border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            name="position"
            value="IT Job"
            readOnly
            className="w-full border p-3 rounded-lg bg-gray-100"
          />
          <div>
            <label>Upload Resume</label>
            <input type="file" name="resume" className="w-full border p-3 rounded-lg" required />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Cover Letter (optional)"
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyIt;
