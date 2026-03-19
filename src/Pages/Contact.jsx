import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form:", form);
    alert("Message sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Contact Us
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded mb-3"
          rows="4"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

    </div>
  );
};

export default Contact;