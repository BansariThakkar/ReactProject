import React from "react";
import { FaCode, FaCheckCircle, FaCogs, FaUserCheck, FaLock, FaComments } from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="text-xl text-white" />,
    title: "UX Driven Engineering",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    bg: "bg-rose-500",
  },
  {
    icon: <FaComments className="text-xl text-white" />,
    title: "Developing Shared Understanding",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    bg: "bg-blue-400",
  },
  {
    icon: <FaUserCheck className="text-xl text-white" />,
    title: "Proven Experience and Expertise",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    bg: "bg-pink-500",
  },
  {
    icon: <FaLock className="text-xl text-white" />,
    title: "Security & Intellectual Property (IP)",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    bg: "bg-teal-400",
  },
  {
    icon: <FaCogs className="text-xl text-white" />,
    title: "Code Reviews",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    bg: "bg-yellow-400",
  },
  {
    icon: <FaCheckCircle className="text-xl text-white" />,
    title: "Quality Assurance & Testing",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    bg: "bg-purple-600",
  },
];

export default function DesignApproach() {
  return (
    <section className="px-4 md:px-16 py-16 bg-gray-100 flex-row justify-center items-center">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Our design and <span className="text-pink-600">development approach</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {features.map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-sm border p-6 space-y-4 hover:shadow-md transition-shadow"
    >
      <div className={`w-10 h-10 flex items-center justify-center rounded ${item.bg}`}>
        {item.icon}
      </div>
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
}
