// import { useContext } from "react";
// import UserContext from "../context/UserContext";
import { HeroSection } from "../components/HeroSection";

const Home = () => {
  // const { user } = useContext(UserContext);

  // if (!user) return <div className="text-center mt-10">Please login</div>;

  return (
    <div className="text-center mt-10">
      {/* <h1 className="text-3xl">Welcome {user.username}</h1> */}
      <HeroSection />
    </div>
  );
};

export default Home;