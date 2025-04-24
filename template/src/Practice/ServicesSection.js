import React from "react";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "📱",
    isActive: false,
  },
  {
    id: 2,
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "💻",
    isActive: true,
  },
  {
    id: 3,
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "🧪",
    isActive: false,
  },
  {
    id: 4,
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions built for your business needs with scalability, security, and performance in mind.",
    icon: "🛠️",
    isActive: false,
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "📱",
    isActive: false,
  },
  {
    id: 6,
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "💻",
    isActive: true,
  },
  {
    id: 7,
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "🧪",
    isActive: false,
  },
  {
    id: 8,
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions built for your business needs with scalability, security, and performance in mind.",
    icon: "🛠️",
    isActive: false,
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f9f7fc] py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Services we offer</h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-[700px] sm:min-w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white min-w-[250px] max-w-xs rounded-xl p-6 shadow-md transition-all duration-300 flex-shrink-0 ${
                service.isActive
                  ? "border-2 border-pink-400"
                  : "hover:border-2 hover:border-pink-300"
              }`}
              
            >
              <div className="text-4xl w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full border border-pink-400 text-pink-600">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
