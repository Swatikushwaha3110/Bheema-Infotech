import React from "react";
import { Link } from "react-router-dom";
import Experts from "../assets/Images/Experts.png"
import Customer from "../assets/Images/Customer.png"
import Progress from "../assets/Images/Progress.png"

const About = () => {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-yellow-300">Bheema Infotech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Empowering businesses with cutting-edge technology solutions.
            We create digital excellence so you can focus on success.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="pt-20 pb-14 bg-white text-gray-900 rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto px-6">

          {/* TEXT CONTENT */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">

            {/* LEFT - VISION */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a globally trusted IT partner providing scalable,
                result-driven digital solutions while fostering innovation
                and customer success.
              </p>
            </div>

            {/* RIGHT - MISSION */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver innovative IT solutions that empower businesses
                to achieve their goals through cutting-edge technology,
                seamless execution, and customized software strategies.
              </p>
            </div>

          </div>

          {/* DIVIDER */}


          {/* IMAGE BELOW */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Mission & Vision"
              className="
                rounded-3xl
                shadow-2xl
                w-full
                max-w-5xl
                h-[300px]
                md:h-[450px]
                object-cover
                hover:scale-105
                transition-transform
                duration-500
              "
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
   <section className="py-20 text-center">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-blue-500">
      Why Choose <span className="text-yellow-300">Us</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* ================= CARD 1 ================= */}
      <div className="h-80 bg-white text-gray-900 p-8 rounded-3xl shadow-xl border border-[0.1rem] border-[rgba(0,0,0,0.2)]
        flex flex-col items-center text-center justify-center">
        
        <img
          src={Experts}
          alt="Expert Team"
          className="w-28 h-28 object-contain floating-img mb-4"
        />

        <h3 className="text-2xl font-semibold mb-3">
          Expert Team
        </h3>

        <p className="text-gray-600">
          Skilled professionals delivering reliable and scalable software solutions.
        </p>
      </div>

      {/* ================= CARD 2 ================= */}
      <div className="h-80 bg-white text-gray-900 p-8 rounded-3xl shadow-xl border border-[0.1rem] border-[rgba(0,0,0,0.2)]
        flex flex-col items-center text-center justify-center">
        
        <img
          src={Customer}
          alt="Customer Focus"
          className="w-28 h-28 object-contain floating-img mb-4"
        />

        <h3 className="text-2xl font-semibold mb-3">
          Customer Focus
        </h3>

        <p className="text-gray-600">
          Solutions tailored to your business goals and growth strategy.
        </p>
      </div>

      {/* ================= CARD 3 ================= */}
      <div className="h-80 bg-white text-gray-900 p-8 rounded-3xl shadow-xl border border-[0.1rem] border-[rgba(0,0,0,0.2)]
        flex flex-col items-center text-center justify-center">
        
        <img
          src={Progress}
          alt="Innovation"
          className="w-22 h-22 object-contain floating-img mb-4"
        />

        <h3 className="text-2xl font-semibold mb-3">
          Innovation
        </h3>

        <p className="text-gray-600">
          Advanced technologies that future-proof your business.
        </p>
      </div>

    </div>
  </div>
</section>




      {/* ================= TEAM SECTION ================= */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            alt="Team"
            className="rounded-3xl shadow-2xl w-full h-[300px] md:h-[450px] object-cover"
          />

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
              Dedicated to Excellence
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              Collaboration, transparency, and innovation are at the heart of everything we do.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Talk to Our Experts
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      {/* <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Get in touch and let us turn your ideas into powerful digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-12 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section> */}

    </div>
  );
};

export default About;
