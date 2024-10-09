import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { useEffect, useState } from "react";
import Products from "./pages/Products";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div id="principal-container" className="overflow-x-hidden relative">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <ToastContainer className="z-10 mt-24" />
      <Footer />
    </div>
  );
}

export default App;
