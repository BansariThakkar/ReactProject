import React from "react";
import { PlayCircle } from "lucide-react"; 
import Card1 from './Images/Card1.png'

const AboutSection = () => {
  return (
    <section className="bg-white px-6 lg:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Leading companies trust us <br />
            <span className="text-black font-normal">to develop software</span>
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            <span className="text-pink-600 font-medium">We add development capacity</span> to tech teams. Our value isn't
            limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
          </p>
          <a href="#" className="text-sm font-semibold text-pink-600 hover:underline flex items-center gap-1">
            See more Informations <span className="text-lg">→</span>
          </a>
        </div>

        {/* Video Thumbnail */}
        <div className="relative w-full max-w-md mx-auto">
          <img
          src={Card1}
            alt="Team Meeting"
            className="rounded-xl w-full h-auto object-cover"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition">
            <PlayCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
