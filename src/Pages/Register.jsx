import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { SiSimplelogin } from "react-icons/si";


const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be under 20 characters"),
});

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

      setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse({
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    });

    if (!result.success) {
      const newErrors = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0];
        newErrors[field] = err.message;
      });

      setErrors(newErrors);
      return;
    }

    
    setErrors({});
    console.log("Registered Successfully:", formData);

        navigate("/");
  };

  return (
    <div
      className="min-h-[90VH] w-full flex flex-col gap-10 items-center justify-center bg-cover bg-center bg-no-repeat p-4 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop')",
      }}
    >

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 mb-8 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"
      >
                <div className="flex flex-col items-center mb-6">
          <div className="bg-orange-500 p-3 rounded-full mb-2 shadow-lg text-white">
            <SiSimplelogin size={30} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Register</h1>
          <p className="text-gray-700 text-sm">Create your account</p>
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter username"
            onChange={handleChange}
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.username && (
            <p className="text-red-600 text-xs mt-1">
              {errors.username}
            </p>
          )}
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-800 text-sm font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.password && (
            <p className="text-red-600 text-xs mt-1">
              {errors.password}
            </p>
          )}
        </div>

        
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-all"
        >
          Register
        </button>

        
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-orange-500 font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;