import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Images/Logo.png'
import Footer from './Images/Footer.png'

export default function CallToActionAndFooter() {
  return (
    <div className="bg-gray-50">
      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gray-200 min-h-[250px] p-8 rounded-2xl text-center flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl md:text-2xl font-semibold mb-4 md:mb-0 text-gray-800">
            Hire the best developers and designers around!
          </div>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition-transform">
            Hire Top Developers
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-semibold mb-4">
                <img className='h-7' src={Logo} alt='Logo'/>
            </div>
            <p className="text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <img
              src={Footer}
              alt="Google Logo"
              className="h-6 inline-block mr-2"
            />
          </div>

          {/* Middle - Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>How it Works</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Areas We Serve</li>
            </ul>
          </div>

          {/* Right - Contact Info + Social Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact us</h4>
            <p className="text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-sm mb-4">+923183561921</p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <FaFacebookF className="text-gray-600" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <FaInstagram className="text-gray-600" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <FaTwitter className="text-gray-600" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <FaLinkedinIn className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 border-t mt-8 py-4">
          © 2023 Copyright by JK Developers. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
