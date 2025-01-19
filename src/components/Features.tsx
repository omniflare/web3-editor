import React from "react";

const Features: React.FC = () => (
  <section className=" py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 h-80">
          {/* Icon Placeholder */}
          <div className="w-20 h-20 bg-blue-100 flex items-center justify-center rounded-full mb-6">
            
            <span className="text-blue-500 text-4xl font-bold">T</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Reliable Technology</h3>
          <p className="text-gray-600 text-lg">
            We use thirdweb's powerful tools to ensure data integrity and scalability.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 h-80">
          {/* Icon Placeholder */}
          <div className="w-20 h-20 bg-green-100 flex items-center justify-center rounded-full mb-6">
            {/* Replace with <SecurityIcon /> */}
            <span className="text-green-500 text-4xl font-bold">S</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Enhanced Security</h3>
          <p className="text-gray-600 text-lg">
            Your tasks are securely stored and verified using blockchain technology.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 h-80">
          {/* Icon Placeholder */}
          <div className="w-20 h-20 bg-orange-100 flex items-center justify-center rounded-full mb-6">
            {/* Replace with <HandshakeIcon /> */}
            <span className="text-orange-500 text-4xl font-bold">H</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Trusted Network</h3>
          <p className="text-gray-600 text-lg">
            Collaborate with companies and professionals through our trusted ecosystem.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
