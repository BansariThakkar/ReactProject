import React from "react";
import Nodejs from './Images/Nodejs.png'
import Php from './Images/Php.png'
import MySql from './Images/MySql.png'
import Java from './Images/Java.png'
import Net from './Images/Net.png'
import Python from './Images/Python.png'
import Rails from './Images/Rails.png'
import Golang from './Images/Golang.png'
import MongoDB from './Images/MongoDB.png'

const techLogos = [
  { src: Nodejs, alt: "Node.js" },
  { src: Php, alt: "PHP" },
  { src: MySql, alt: "MySQL" },
  { src: Java, alt: "Java" },
  { src: Net, alt: "Python" },
  { src: Python, alt: "Rails" },
  { src: Rails, alt: "Golang" },
  { src: Golang, alt: "MongoDB" },
  { src: MongoDB, alt: ".NET Core" },
];

export default function TechStack() {
  return (
    <section className="bg-white px-4 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Our <span className="text-pink-600">Tech Stack</span></h2>

      <div className="text-gray-600 flex justify-center flex-wrap gap-6 mt-4 mb-10 text-sm md:text-base">
        <span className="text-pink-600 font-semibold">Backend</span>
        <span>Frontend</span>
        <span>Databases</span>
        <span>CMS</span>
        <span>CloudTesting</span>
        <span>DevOps</span>
      </div>

      <div className="flex flex-wrap justify-center gap-20 mt-5 items-center">
        <img src={Nodejs}/>
        <img src={Php}/>
        <img src={MySql}/>
        <img src={Java}/>
        <img src={Net}/>
      </div>
      <div className="flex flex-wrap justify-center gap-20 mt-5 items-center">
      <img src={Python}/>
        <img src={Rails}/>
        <img src={Golang}/>
        <img src={MongoDB}/>
        </div>
    </section>
  );
}
