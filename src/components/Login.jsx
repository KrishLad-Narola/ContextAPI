import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { z } from 'zod';
import { SiSimplelogin } from "react-icons/si";

const loginValidation = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be under 20 characters')
});

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginValidation.safeParse({ username, password });

    if (!result.success) {
      const ResultErrors = {};
      result.error.errors.forEach(err => {
        // Corrected index to use the field name (e.g., 'username')
        ResultErrors[err.path[0]] = err.message;
      });
      setErrors(ResultErrors);
      return;
    }
    
    setErrors({});
    setUser({ username, password });
    console.log("Logged in successfully!");
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{backgroundImage: `url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop')` }}>
      <form className="w-full max-w-sm p-8 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-orange-500 p-3 rounded-full mb-2 shadow-lg text-white">
            <SiSimplelogin size={30} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Welcome Back</h1>
          <p className="text-gray-700 text-sm">Rise and shine, please login</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-semibold mb-1">Username</label>
          <input
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your username"
          />
          {errors.username && (
            <p className="text-red-600 text-xs mt-1 font-medium">{errors.username}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 text-sm font-semibold mb-1">Password</label>
          <input
            className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600 text-xs mt-1 font-medium">{errors.password}</p>
          )}
        </div>
        <button 
          type="submit"
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transform active:scale-95 transition-all"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;