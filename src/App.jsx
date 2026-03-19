import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <UserContextProvider>
      {isLogin ? (
        <Login goToRegister={() => setIsLogin(false)} />
      ) : (
        <Register goToLogin={() => setIsLogin(true)} />
      )}

      <Profile />
    </UserContextProvider>
  );
}

export default App;