import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About <span className="text-blue-600">Bheema Infotech</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Bheema Infotech is an IT company dealing in cutting-edge technologies to
            simplify innovation for you. We simply believe in “Your product – our technology,
            we create – you sell.” We provide web development services to help you customize
            enterprise-grade and result-driven web solutions for your business. We provide
            you design, management, and implementation of innovative solutions.
          </p>
        </div>
      </section>

  <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      
      {/* Left Text Section */}
      <div className="space-y-6 flex flex-col justify-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg md:text-lg leading-snug">
            To deliver innovative IT solutions and empower businesses to achieve their goals
            through cutting-edge technology, seamless execution, and customized software solutions.
          </p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg md:text-lg leading-snug">
            To be a trusted IT partner globally, providing scalable and result-driven digital
            solutions while fostering innovation, efficiency, and customer success.
          </p>
        </div>
        {/* Optional decorative line */}
        <div className="w-24 h-1 bg-orange-400 rounded-full mt-6"></div>
      </div>

      {/* Right Image Section */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
          alt="Mission & Vision"
          className="rounded-lg shadow-lg w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>
      
    </div>
  </div>
</section>



{/* Why Choose Us */}
<section className="bg-blue-50 py-20">
  <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-10">Why Choose Us</h2>
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl shadow-lg h-64 flex flex-col items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:scale-105">
        <div className="text-blue-600 text-4xl mb-4 transition-all duration-300 hover:text-white">👨‍💻</div>
        <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
        <p className="text-gray-700 hover:text-white">
          Highly skilled professionals delivering top-notch software solutions with precision and innovation.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl shadow-lg h-64 flex flex-col items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:scale-105">
        <div className="text-blue-600 text-4xl mb-4 transition-all duration-300 hover:text-white">🎯</div>
        <h3 className="text-2xl font-semibold mb-2">Customer-Centric</h3>
        <p className="text-gray-700 hover:text-white">
          We prioritize client requirements and customize solutions to match their exact needs.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-xl shadow-lg h-64 flex flex-col items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:scale-105">
        <div className="text-blue-600 text-4xl mb-4 transition-all duration-300 hover:text-white">🚀</div>
        <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
        <p className="text-gray-700 hover:text-white">
          Cutting-edge technology and creative strategies to ensure business growth and efficiency.
        </p>
      </div>

    </div>
  </div>
</section>




      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Let's Build Something Together</h2>
          <p className="text-gray-700 mb-8">
            Connect with us to discuss your next project, and let our expert team provide
            the perfect IT solution for your business.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
