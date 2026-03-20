import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;