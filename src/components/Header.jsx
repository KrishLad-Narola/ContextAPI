import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <header className=" bg-[#D97A2B] text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">𝙼𝚘𝚛𝚗𝚒𝚗𝚐 𝙶𝚕𝚘𝚛𝚢 </h1>

      <nav className="flex gap-4">
        <Link to="/home">𝓗𝓸𝓶𝓮</Link>
        <Link to="/about">𝓐𝓫𝓸𝓾𝓽</Link>
        <Link to="/contact">𝓒𝓸𝓷𝓽𝓪𝓬𝓽</Link>
       <Link to="/">𝓛𝓸𝓰𝓲𝓷</Link>
      </nav>
    </header>
  );
};

export default Header;