import React from 'react';
import R1 from './Images/R1.png'
import R2 from './Images/R2.png'
import R3 from './Images/R3.png'

const resources = [
  {
    id: 1,
    image: R1,
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
  },
  {
    id: 2,
    image: R2,
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
  },
  {
    id: 3,
    image: R3,
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
  },
  {
    id: 4,
    image: R1,
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
  },
  {
    id: 5,
    image: R2,
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
  },
];

export default function FeaturedResources() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Featured <span className="font-bold">Resources</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={resource.image}
              alt="Resource"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-800 mb-2">{resource.title}</p>
              <a
                href="#"
                className="text-purple-700 text-sm font-medium hover:underline flex items-center"
              >
                Read More
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
