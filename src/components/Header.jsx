import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { IoLogoWebComponent } from "react-icons/io5";


const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <header className=" bg-[#D97A2B] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"> <IoLogoWebComponent  size={30}/>Morning Glory</h1>

      <nav className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       <Link to="/">login</Link>
      </nav>
    </header>
  );
};

export default Header;