import { useState } from "react";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLogin(true);
    console.log("Clicked");
  };

  return (
    <div className="flex flex-col items-center text-center mt-10 min-h-[80vh]">
      <h1>Application Cards</h1>

      <Alert
        className="w-[50%] mx-auto mt-2 cursor-pointer bg-green-100 border border-green-300 text-black rounded-md shadow-md"
        title=" Authentication"
        type="Authentication"
        banner
        onClick={() => navigate("/PostAuthantication")}
      />

      <br />

      <Alert
        className="w-[50%] mx-auto mt-2 cursor-pointer bg-blue-100 border border-blue-300 text-black rounded-md shadow-md"
        title=" PostApi"
        type="PostApi"
        banner
        onClick={() => navigate("/list")}
      />
    </div>
  );
};

export default Home;