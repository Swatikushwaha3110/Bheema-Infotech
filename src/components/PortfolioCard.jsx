import React from "react";

const PortfolioCard = ({ title }) => {
  return (
    <div className="w-full md:w-1/3 p-3">
      <div className="bg-white shadow-md rounded-xl p-5">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default PortfolioCard;
