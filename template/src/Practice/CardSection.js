import React from "react";
import Card1 from './Images/Card1.png';
import Card2 from './Images/Card2.png';
import Card3 from './Images/Card3.png';

const cards = [
  {
    bgColor: "bg-violet-100",
    image: Card1,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before everything else. Search Clearance and Reporting Cards simplify...",
    link: "#",
  },
  {
    bgColor: "bg-green-100",
    image: Card2,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before everything else. Search Clearance and Reporting Cards simplify...",
    link: "#",
  },
  {
    bgColor: "bg-pink-100",
    image: Card3,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before everything else. Search Clearance and Reporting Cards simplify...",
    link: "#",
  },
];

const CardSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10 space-y-8 w-full max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 mt-2 leading-tight">
        Our recent <br className="hidden sm:block" /> case studies
      </h2>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-6 rounded-xl p-6 shadow-md ${card.bgColor}`}
        >
          <img
            src={card.image}
            alt="design"
            className="w-full lg:w-1/2 object-contain max-h-64"
          />
          <div className="lg:w-1/2 text-gray-800 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            <a href={card.link} className="text-purple-600 font-semibold hover:underline">
              Read more &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
