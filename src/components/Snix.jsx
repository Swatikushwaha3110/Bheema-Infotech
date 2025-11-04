import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/Gradient Loading.gif";

const Snix = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- Left Image Section -------------------- */}
          <div className="flex-1 flex justify-center">
            <img
              src={loader}
              alt="Snix Website"
              className="w-full rounded-2xl hover:scale-105 
                         transition-transform duration-500 mix-blend-multiply"
            />
          </div>

          {/* -------------------- Right Content Section -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">
            <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
              AI Social Media Content Creation
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Snix – Smart AI Content & Post Generator
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Snix is an AI-powered content creation tool used to generate creative social
              media posts, captions, hashtags, and layouts instantly. Perfect for influencers,
              marketers and businesses to grow faster with smart automation.
            </p>

            <div className="space-y-2 text-gray-800 text-lg">
              <p>🤖 <span className="font-semibold">AI Social Media Post Generator</span></p>
              <p>📝 <span className="font-semibold">Captions, Hashtags & Ad Copy</span></p>
              <p>⚡ <span className="font-semibold">Fast Auto Content Creation</span></p>
              <p>📱 <span className="font-semibold">Responsive & Simple Dashboard</span></p>
            </div>

            <Link
              to="https://snix-2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 
                         text-white font-semibold rounded-xl shadow-lg 
                         transition-all duration-300"
            >
              Visit Live Project
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default Snix;
