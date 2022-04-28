import { useState } from "react";
import "./App.css";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import AboutUs from "./Components/aboutUs";
import FAQ from "./Components/FAQ";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
