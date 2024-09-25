import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { useState } from "react";
import Products from "./pages/Products";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
