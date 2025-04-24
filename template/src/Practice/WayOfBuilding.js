import React from "react";
import Img4 from './Images/Img4.png';
import Img2 from './Images/Img2.png';
import Img3 from './Images/Img3.png';

const sections = [
  {
    title: "Build the right team to scale",
    desc: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and works with you long term like your own team overseas.",
    extra: "Our delivery model helps you cut costs and deliver within budget.",
    para: "Simform is quick to identify larger problem with the software so we decided to expand our scope with new modules",
    author: "Jenny Henshaw",
    image: Img4,
    reverse: true,
  },
  {
    title: "Build the right team to scale",
    desc: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and works with you long term like your own team overseas.",
    extra: "Software is based on supply and proper vision to scale fast.",
    para: "Simform is quick to identify larger problem with the software so we decided to expand our scope with new modules",
    author: "James Henshaw",
    image: Img2,
    reverse: false,
  },
  {
    title: "Build the right team to scale",
    desc: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and works with you long term like your own team overseas.",
    extra: "Our delivery model helps you cut costs and deliver within budget.",
    para: "Simform is quick to identify larger problem with the software so we decided to expand our scope with new modules",
    author: "Jenny Henshaw",
    image: Img3,
    reverse: true,
  },
];

export default function WayOfBuilding() {
  return (
    <section className="px-4 md:px-16 py-20 bg-white flex-row justify-center items-center">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        Way of building <br />
        <span className="text-pink-600">Great Software</span>
      </h2>

      <div className="space-y-24">
        {sections.map((sec, index) => (
          <div
          key={index}
          className={`flex flex-col md:flex-row ${
            sec.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={sec.image}
              alt="Team"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        
          {/* Content */}
          <div className="md:w-1/2 w-full space-y-4 md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">{sec.title}</h3>
            <p className="text-gray-600 leading-relaxed">{sec.desc}</p>
            <p className="text-black font-medium">{sec.extra}</p>
            <p className="text-pink-600 font-medium">{sec.para}</p>
            <p className="text-sm text-gray-500">– {sec.author}</p>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
}
