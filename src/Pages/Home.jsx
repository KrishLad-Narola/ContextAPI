
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
      <h1 className="flex flex-col gap-4 text-3xl">Application Cards</h1>

      <Alert
        className="w-[50%] mx-auto mt-2 cursor-pointer bg-green-100 border border-green-300 text-black rounded-md shadow-md"
        title=" Authentication"
        type="Authentication"
        banner
        onClick={() => navigate("/post-authentication")}
      />

      <br />

      <Alert
        className="w-[50%] mx-auto mt-2 cursor-pointer bg-blue-100 border border-blue-300 text-black rounded-md shadow-md"
        title=" PostApi"
        type="PostApi"
        banner
        onClick={() => navigate("/list")}
      />

      <br />

      <Alert
        className="w-[50%] mx-auto mt-2 cursor-pointer bg-red-300 border border-red-400 text-black rounded-md shadow-md"
        title=" Post-Management"
        type="Post-Management"
        banner
        onClick={() => navigate("/PostList")}
      />

    </div>
  );
};

export default Home;
