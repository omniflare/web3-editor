import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-16">
    <div className="container mx-auto text-center">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">Karya Proof</h3>
        <p className="text-gray-400">
          Ensuring Authentic Task Submissions with Blockchain Technology
        </p>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-white">
          About Us
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Contact
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Terms of Service
        </a>
      </div>
      <div className="text-gray-500">
        <p>&copy; 2025 Karya Proof. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
