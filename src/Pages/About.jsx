import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>

        <p className="text-gray-600 mb-4">
          This project is built using React with Context API for state management
          and Zod for form validation.
        </p>

        <p className="text-gray-600 mb-4">
          It demonstrates how authentication flows work in a frontend application,
          including login, registration, and protected routes.
        </p>

        <p className="text-gray-600">
          The goal is to create a clean, responsive, and scalable React structure
          that can be extended into real-world applications.
        </p>
      </div>

    </div>
  );
};

export default About;