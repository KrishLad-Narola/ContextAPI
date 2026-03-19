import React, { useState } from "react";
import { registerSchema } from "../utils/validationSchema";

const Register = ({ goToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach((err) => {
        formatted[err.path[0]] = err.message;
      });
      setErrors(formatted);
      return;
    }

    setErrors({});
    console.log("Registered:", formData);

  
    goToLogin();
  };

  return (
    
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8')",
      }}
    >
      <form className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-xl w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          name="username"
          placeholder="Username"
          className="w-full mb-2 p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-2 p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-2 p-2 rounded"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <button className="w-full bg-orange-500 text-white py-2 rounded mt-3">
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-orange-600 cursor-pointer"
            onClick={goToLogin}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;