import React from "react";
import { Link } from "react-router-dom";
import rooyah from "../assets/Rooyah.png"; // Same image
import loadervideo from "../assets/square.mp4";

const Rooyah = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-white flex items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* -------------------- LEFT IMAGE SECTION -------------------- */}
        <div className="flex-1 relative flex justify-center items-center min-h-[450px] md:min-h-[550px]">
       
                 <video
                   src={loadervideo}
                   autoPlay
                   muted
                   loop
                   className="absolute w-[200px] h-[50px] md:w-[650px] md:h-[650px] object-cover opacity-90 animate-spin-slow"
                   style={{ zIndex: 1 }}
                 ></video>
       
                 {/* ✅ Bigger + Rounded Image */}
                 <div className="relative z-10 flex items-center justify-center 
                       w-[420px] h-[420px] rounded-3xl overflow-hidden p-2">
       
                   <img
                     src={rooyah}
                     alt="TradePlus Logo"
                     className="w-full h-96 object-contain rounded-3xl"
                   />
                 </div>
       
       
               </div>

          {/* -------------------- RIGHT TEXT SECTION -------------------- */}
          <div className="flex-1 text-center md:text-left space-y-5">

            <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
              Secure Crypto Transactions
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Cryptocurrency is pseudonymous rather than anonymous
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Rooyah is a crypto-secured platform where every transaction is 
              transparently recorded on blockchain. Identities stay protected,
              activity remains trackable, and users trade with complete trust.
            </p>

            <div className="space-y-2 text-gray-800 text-lg">
              <p>✅ Transparent blockchain recorded transactions</p>
              <p>✅ Secure wallet system with identity protection</p>
              <p>✅ Safe & trusted crypto environment</p>
              <p>✅ No anonymous misuse, only verified users</p>
            </div>

            <Link
              to="https://rooyah.vercel.app/"
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
    </>
  );
};

export default Rooyah;
