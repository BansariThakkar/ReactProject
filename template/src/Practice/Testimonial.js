import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Irwana Khan",
      title: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      name: "Maya Patel",
      title: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      name: "John Smith",
      title: "Technical Lead",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
    },
    {
      name: "Ayesha Ali",
      title: "UX Researcher",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 bg-[#fbf9ff] text-center">
      <h2 className="text-purple-700 text-xl font-medium mb-2">Why customers love</h2>
      <h1 className="text-3xl font-bold mb-6">working with us</h1>
      <p className="max-w-2xl mx-auto text-gray-500 mb-12">
        Without any doubt I recommend Adcliffe Solutions as one of the best web design and digital marketing agencies.
        One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {testimonials.map((person, index) => (
          <div key={index} className="p-4 w-56 hover:scale-105 transition">
            <img
              src={person.image}
              alt={person.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <div className="flex justify-center text-yellow-400 mb-2">
              {"★".repeat(person.rating)}
            </div>
            <h3 className="font-semibold">{person.name}</h3>
            <p className="text-sm text-gray-500">{person.title}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 text-purple-700 text-lg">
        <button className="border border-purple-700 p-2 rounded-full hover:bg-purple-100 transition">
          &larr;
        </button>
        <button className="border border-purple-700 p-2 rounded-full hover:bg-purple-100 transition">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
