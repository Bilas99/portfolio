// AboutSection.jsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/400" 
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Welcome to our company! We are passionate about delivering exceptional products and services. Our team is dedicated to ensuring that our clients receive the best experience possible. We pride ourselves on innovation, quality, and a commitment to excellence.
          </p>
          <p className="text-gray-600 text-lg">
            With years of experience in the industry, we have built a reputation for reliability and trustworthiness. Join us on our journey as we continue to grow and make a positive impact in the world.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
