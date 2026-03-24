import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { success, z } from "zod";
import { useNavigate, Link } from "react-router-dom";
import { SiSimplelogin } from "react-icons/si";

const loginValidation = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    if (success) {
      setIsLoggedIn(true);
    }
  }
  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginValidation.safeParse({
      username,
      password,
    });

    if (!result.success) {
      const errObj = {};
      result.error.issues.forEach((err) => {
        errObj[err.path[0]] = err.message;
      });
      setErrors(errObj);
      return;
    }

    setUser({ username, password });
    console.log("LogIn Successfully", result.data)
    navigate("/home");
  };

  // console.log(username , password)

  return (
    <div
      className="min-h-[90VH] w-full flex flex-col gap-10 items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <form onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl">

        <div className="flex flex-col items-center mb-6">
          <div className="bg-orange-500 p-3 rounded-full mb-2 shadow-lg text-white">
            <SiSimplelogin size={30} />
          </div>
          <h2 className="text-xl mb-4">Login</h2>


          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-1">
              Username
            </label>
            <input
              className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}

            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}

              <button
                className=" bg-orange-500 text-white w-full p-2 rounded-lg mt-2 "
                type="submit">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>


              <p className="text-sm text-center mt-4">
                No account?{" "}
                <Link to="/register" className="text-orange-500 font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
      {/* <p onClick={toggleMode} className="cursor-pointer text-white font-bold">
        {isLogin 
          ? "Don't have an account? Register here." 
          : "Already have an account? Login here."}
      </p> */}
    </div>


  );
}

export default Login;