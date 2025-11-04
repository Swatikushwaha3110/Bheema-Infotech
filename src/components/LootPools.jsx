import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/loader.gif"; // Same image

const LootPools = () => {
  return (
    <>
      <section className="py-16 md:px-12 lg:px-24 bg-white flex items-center justify-between">

        {/* -------------------- LEFT IMAGE SECTION -------------------- */}
        <div className="flex-1 flex justify-center">
          <img
            src={loginImg}
            alt="LootPools Online Gaming"
            className="w-full max-w-md rounded-2xl hover:scale-105 
                       transition-transform duration-500 mix-blend-multiply"
          />
        </div>

        {/* -------------------- RIGHT TEXT SECTION -------------------- */}
        <div className="flex-1 text-center md:text-left space-y-5">

          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-wide">
            Online Gaming Platform
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Play Games & Win Exciting Rewards
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            LootPools ek online gaming & reward-based platform hai jahan users 
            different games khelkar coins earn kar sakte hain, contests join 
            kar sakte hain aur exciting prizes jeet sakte hain.
          </p>

          <div className="space-y-2 text-gray-800 text-lg">
            <p>✅ Reward-based online games</p>
            <p>✅ Earn coins & redeem gifts</p>
            <p>✅ Real-time leaderboard & contests</p>
            <p>✅ Fully responsive clean UI</p>
          </div>

          <Link
            to="https://lootpools.bheemainfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold rounded-xl shadow-lg 
                       transition-all duration-300"
          >
            Visit Live Project
          </Link>

        </div>

      </section>
    </>
  );
};

export default LootPools;
