import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

//components
import NavBar from "./components/navBar/navBar";

// views
import Home from "./views/home/home.jsx";
import Shop from "./views/shop/shop";
import Contact from "./views/contact/contact";
import About from "./views/about/about";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
