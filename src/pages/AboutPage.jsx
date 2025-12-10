import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      {/* Hero Section */}
      <section className="py-24 text-center">
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

      {/* Mission & Vision */}
      <section className="pt-20 pb-8 bg-white text-gray-900 rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver innovative IT solutions that empower businesses to achieve
                their goals through cutting-edge technology, seamless execution, and
                customized software strategies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a globally trusted IT partner providing scalable, result-driven
                digital solutions while fostering innovation and customer success.
              </p>
            </div>

            <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Mission & Vision"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-15 text-center text-blue-500 bg-gradient-to-b from-blue-600 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-12 text-white">
            Why Choose <span className="text-yellow-300">Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
       <div className="relative group h-72 bg-white text-gray-900 p-8 rounded-3xl shadow-xl overflow-hidden">
  
  {/* Sliding Background */}
  <div className="absolute inset-0 bg-blue-600 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-blue-600 text-5xl mb-4 group-hover:text-white">👨‍💻</div>
    <h3 className="text-2xl font-semibold mb-3 group-hover:text-white">
      Expert Team
    </h3>
    <p className="group-hover:text-white">
      Our skilled professionals craft top-notch software solutions that drive
      business success.
    </p>
  </div>
</div>


            {/* Card 2 */}
           <div className="relative group h-72 bg-white text-gray-900 p-8 rounded-3xl shadow-xl overflow-hidden transition-all duration-500">

  {/* Sliding Background */}
  <div className="absolute inset-0 bg-blue-600 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-blue-600 text-5xl mb-4 group-hover:text-white">🎯</div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-white">
      Customer-Centric
    </h3>
    <p className="text-gray-900 group-hover:text-white">
      We understand your goals and customize solutions to meet your exact needs.
    </p>
  </div>
</div>


            {/* Card 3 */}
           <div className="relative group h-72 bg-white text-gray-900 p-8 rounded-3xl shadow-xl overflow-hidden transition-all duration-500">

  {/* Sliding Background */}
  <div className="absolute inset-0 bg-blue-600 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-blue-600 text-5xl mb-4 group-hover:text-white">🚀</div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-white">
      Innovative Solutions
    </h3>
    <p className="text-gray-900 group-hover:text-white">
      Delivering creativity and advanced technology to boost your business growth.
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Team/Office Image Section */}
      <section className="pb-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
              alt="Team Collaboration"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
              Dedicated to Excellence
            </h1>
            <p className="text-gray-950 text-lg font-bold leading-relaxed">
              We believe in collaboration, transparency, and excellence in every project we take on.
              Our team continuously innovates to provide top-tier digital solutions that empower
              businesses globally.
            </p>
            <Link to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Connect with us to discuss your next project — and let our team bring your
            vision to life with powerful IT solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-12 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
