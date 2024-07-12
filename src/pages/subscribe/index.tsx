import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FaMailBulk } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const SubscribePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-20 min-h-screen w-screen py-2">
      <div className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#FF3BFF] to-[#00F0FF]">monvest.ai</div>
      <div className="p-6 rounded-lg shadow-md items-center flex flex-col gap-20 w-full max-w-md">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-center mb-4 text-nowrap">Subscribe now, and get these benefits!</h2>
          <div className="flex flex-col gap-6 pl-12">
            <div className="flex flex-row gap-4">
              <FaMailBulk className="self-center text-3xl" />
              <span className="text-2xl text-nowrap">Real time email alert</span>
            </div>
            <div className="flex flex-row gap-4">
              <FaRobot className="self-center text-3xl" />
              <span className="text-2xl text-nowrap">AI-driven portfolio monitoring</span>
            </div>
            <div className="flex flex-row gap-4">
              <FaChartLine className="self-center text-3xl" />
              <span className="text-2xl text-nowrap">Unlimited amount of recommendation</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <Link to="/subscribe" className="cursor-pointer border-2 hover:bg-opacity-40 hover:text-white border-pink-400 bg-pink-300 bg-opacity-25 w-fit self-center h-fit py-1 px-8 rounded-full text-white text-lg">
            Subscribe
          </Link>
          <div onClick={() => navigate("/free/login")} className="cursor-pointer border-2 hover:bg-gray-800 border-blue-400 bg-blue-300 bg-opacity-25 w-fit self-center py-1 px-8 rounded-full text-white text-xl">
            Try Free!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
