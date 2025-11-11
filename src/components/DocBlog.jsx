import React from "react";
import { Link } from "react-router-dom";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";
// import docblog from "../assets/docblog.png"; 

const DocBlog = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* ✅ LEFT CONTENT */} 
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-purple-600 text-lg font-semibold uppercase tracking-wide">
            AI Powered Content Writing
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            DocBlog – Smart AI Blogging Platform
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            DocBlog is an AI-powered blogging tool that helps content creators generate
            articles, edit content, manage blogs, and publish with a clean and simple UI.
            Built for writers, students, and digital creators to work faster and smarter.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✍️ <span className="font-semibold">AI Content Generator</span></p>
            <p>📄 <span className="font-semibold">Blog Writing & Editing Tools</span></p>
            <p>⚡ <span className="font-semibold">Fast & Responsive Interface</span></p>
            <p>☁️ <span className="font-semibold">Cloud-Based Blogging Platform</span></p>
          </div>

          <Link
            to="https://doc-blog-2.vercel.app/"
            target="_blank"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT SIDE — VIDEO + IMAGE CLEAN ALIGNMENT */}
        <div className="flex-1 flex justify-center md:justify-end relative">

          {/* ✅ Background animated canvas */}
          <video
            src={canvas}
            autoPlay
            muted
            loop
            className="absolute w-[240px] h-[240px] md:w-[400px] md:h-[400px]
                       object-contain opacity-80 animate-spin-slow"
          />

          {/* ✅ Foreground Main Screenshot */}
          {/* <img
            src={}
            alt="DocBlog Website"
            className="relative z-10 w-[170px] h-[170px] md:w-[280px] md:h-[280px]
                       object-contain rounded-2xl drop-shadow-xl hover:scale-105
                       transition-transform duration-500"
          /> */}
        </div>

      </div>
    </section>
  );
};

export default DocBlog;
