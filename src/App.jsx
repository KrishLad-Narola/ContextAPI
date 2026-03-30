
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Applayout from "./Layout/Applayout";
import CardList from "./components/cardlist";
import PostList from "./components/PostList";


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Applayout />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list" element={<CardList />} />
           <Route path="/PostList" element={<PostList />} />
        </Routes>
        {/* <CardList /> */}
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
