import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { TbApiApp } from "react-icons/tb";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="w-full bg-orange-300 shadow-md px-6 py-4 flex justify-between items-center">      
      <h1 className="text-xl font-bold text-gray-700"> <TbApiApp />API DATA</h1>

      <div className="flex gap-4 items-center">
        <Link to="/home" className="text-gray-700 hover:text-orange-500">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-orange-500">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-orange-500">
          Contact
        </Link>

        {user && (
          <span className="text-sm text-gray-600">
            Hello, {user.username}
          </span>
        )}

        
        <button
          onClick={handleLogout}
          className="bg-orange-500 text-white px-3 py-1 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;