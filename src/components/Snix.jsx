import React from "react";
import { Link } from "react-router-dom";
import snix from "../assets/Images/10sinixai.png";

const Snix = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* ✅ LEFT: TEXT CONTENT (Section order swapped) */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1 w-full">
          <h3 className="text-pink-600 text-lg font-semibold uppercase tracking-wide">
            Snix • AI Social Media Content Creation
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Smart AI Content & Post Generator
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Snix is an AI-powered content creation tool that instantly generates 
            creative social media posts, captions, hashtags, and layouts. 
            It’s a perfect solution for influencers, marketers, and businesses 
            looking to grow faster with intelligent automation.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>🤖 <span className="font-semibold">AI Social Media Post Generator</span></p>
            <p>📝 <span className="font-semibold">Captions, Hashtags & Ad Copy</span></p>
            <p>⚡ <span className="font-semibold">Fast Auto Content Creation</span></p>
            <p>📱 <span className="font-semibold">Responsive & Easy-to-Use Dashboard</span></p>
          </div>

          <Link
            to="https://snix-2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>

        {/* ✅ RIGHT: IMAGE */}
        <div className="flex justify-center items-center w-full h-[380px] sm:h-[460px] md:h-[520px] bg-white rounded-2xl shadow-lg overflow-hidden order-1 md:order-2">
          <img
            src={snix}
            alt="Snix App"
            className="w-[95%] h-[95%] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Snix;
