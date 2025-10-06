import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-6">
        {/* Useful Links */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#why-us" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms of service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Privacy policy</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-blue-400 transition">Web Design</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Web Development</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Product Management</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Marketing</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Graphic Design</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-4">Contact Us</h4>
          <p>302 A, Rajat Complex, Kibe Compound, Indore, MP 452001</p>
          <p>Phone: +91-8770775732, +91-9770362377</p>
          <p>Email: bheemainfotech@gmail.com</p>
        </div>

        {/* About */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-4">About Bheema Infotech</h4>
          <p>Bheema Infotech is an IT Firm located in Central India, providing complete IT solutions.</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        &copy; 2025 Bheema Infotech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
