import React from "react";
import loader from "../assets/Gradient Loading.gif";
import { Link } from "react-router-dom";

const KidKinder = () => {
  return (
    <>
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Content Section */}
        <div className="flex-1 text-center md:text-left space-y-5">
      <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
  Modern Preschool Management & Fun Learning
</h3>

<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
  KidKinder – Smart Kids Learning Website
</h1>

<p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
  KidKinder is a creative and child-friendly platform built for preschools and
  kindergartens. Its colorful and interactive UI helps children learn through
  fun activities, while parents and teachers stay connected with digital
  communication, schedules, and class updates.
</p>

<div className="space-y-2 text-gray-800 text-lg">
  <p>🎨 <span className="font-semibold">Animated UI for Kids Engagement</span></p>
  <p>📚 <span className="font-semibold">Activity-Based Learning Tools</span></p>
  <p>📅 <span className="font-semibold">Event Calendar & Class Management</span></p>
  <p>👨‍👩‍👧 <span className="font-semibold">Parent–Teacher Communication</span></p>
</div>
<Link to={"https://kidkinder.bheemainfotech.in/"} className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
            Visit Live Project
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full blur-3xl opacity-70"></div>
          <img
            src={loader}
            alt="Unicat Project"
            className="w-full max-w-md rounded-2xl hover:scale-105 transition-transform duration-500 z-10"
          />
        </div>

      </div>
    </section>
    </>
  )
}

export default KidKinder