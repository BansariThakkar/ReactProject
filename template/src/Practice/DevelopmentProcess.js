import React from "react";
import { FaTrophy } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    desc: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    desc: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    desc: "Standups, weekly demos, and reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    desc: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    id: 6,
    title: "Iterative delivery",
    desc: "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-white py-20 px-4 md:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        How development <br />
        <span className="text-pink-600">through Alcaline works</span>
      </h2>

      <div className="relative mt-16">
        {/* Timeline Line */}
        <div className="absolute top-1/2 w-full h-1 bg-pink-300 transform -translate-y-1/2 z-0"></div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative bg-white border border-gray-200 rounded-xl shadow-md p-6 max-w-sm text-left ${
                index % 2 === 0 ? "self-end" : "self-start"
              }`}
            >
              <div className="text-pink-600 font-bold mb-2">
                #{step.id} {step.title}
              </div>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
