import React from "react";
import { Link } from "react-router-dom";
import rooyah from "../assets/Rooyah.png";
import canvas from "../assets/Canvas Framer Template - Framer Mobile.mp4";

const Rooyah = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-white flex justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl w-full">

        {/* ✅ LEFT IMAGE + CANVAS SECTION */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative flex justify-center items-center
                          w-full max-w-[380px] md:max-w-[480px]
                          h-[380px] md:h-[480px]"
          >
            {/* ✅ Background Canvas (spinning animation) */}
            <video
              src={canvas}
              autoPlay
              muted
              loop
              className="absolute
                         w-[300px] h-[300px]
                         md:w-[480px] md:h-[480px]
                         object-contain
                         opacity-90
                         animate-spin-slow"
              style={{ zIndex: 1 }}
            ></video>

            {/* ✅ Foreground Logo */}
            <img
              src={rooyah}
              alt="Rooyah Logo"
              className="
                relative z-10
                w-[220px] h-[220px]
                md:w-[300px] md:h-[300px]
                object-contain
                drop-shadow-xl
              "
            />
          </div>
        </div>

        {/* ✅ RIGHT TEXT SECTION */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Secure Crypto Transactions
          </h3>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Cryptocurrency is pseudonymous, not anonymous
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Rooyah is a crypto-secured platform where every transaction is
            transparently recorded on blockchain. Identities remain protected,
            activity stays trackable, and users trade with complete trust.
          </p>

          <div className="space-y-2 text-gray-800 text-base md:text-lg">
            <p>✅ Transparent blockchain-based transactions</p>
            <p>✅ Secure wallet with identity protection</p>
            <p>✅ Safe & trusted crypto environment</p>
            <p>✅ No anonymous misuse — only verified users</p>
          </div>

          <Link
            to="https://rooyah.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700
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

export default Rooyah;
