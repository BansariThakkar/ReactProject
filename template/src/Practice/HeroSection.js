import React from "react";
import HeroImg from './Images/HeroImg.png'

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center">
      {/* Text Content */}
      <div className="max-w-xl mb-10 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-light mb-6">
          Great <span className="text-purple-500 font-semibold">Product</span> is<br />
          <span className="font-bold text-gray-900">built by great</span>{" "}
          <span className="text-purple-500 font-bold">teams</span>
        </h1>
        <p className="text-gray-600 mb-6">
          We help build and manage a team of world-class developers to bring your vision to life
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-all duration-300">
          Let's get started!
        </button>
      </div>

      <div className="max-w-xl">
        <img
          src={HeroImg}
          alt="Team Collaboration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
