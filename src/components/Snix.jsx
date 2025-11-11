import React from "react";
import { Link } from "react-router-dom";
import snix from "../assets/Images/10sinixai.png";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";

const Snix = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto">

        {/* ✅ LEFT - VIDEO + IMAGE CENTERED (Snix image with rotating canvas) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex justify-center items-center
                          w-full max-w-[480px]
                          h-[380px] md:h-[550px]">

            {/* Rotating background canvas (video) */}
            <video
              src={canvas}
              autoPlay
              muted
              loop
              className="
                absolute 
                w-[260px] h-[260px]
                md:w-[550px] md:h-[550px]
                object-contain
                opacity-80 animate-spin-slow
              "
              style={{ zIndex: 1 }}
            ></video>

            {/* Center image (Snix) */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={snix}
                alt="Snix App"
                className="
                  w-[180px] h-[180px] 
                  md:w-[320px] md:h-[310px]
                  object-contain
                "
              />
            </div>
          </div>
        </div>

        {/* ✅ RIGHT CONTENT */}
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
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Snix;
