import React from "react";

const WhyUs = () => {
  const accordions = [
    { title: "Who We Are", content: "Bheema Infotech is an IT Firm located in Central India..." },
    { title: "What We Provide", content: "Best Web and Mobile Solutions for startups and enterprises..." },
    { title: "Our Vision", content: "Complete IT Solutions for advanced technologies and automation." },
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 bg-cover bg-center rounded" style={{backgroundImage: "url('/assets/img/why-us.jpg')"}}></div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          {accordions.map((acc, i) => (
            <div key={i} className="mb-4 border-b pb-2">
              <h4 className="font-bold cursor-pointer">{acc.title}</h4>
              <p className="text-gray-600 mt-1">{acc.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
