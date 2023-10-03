import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

//components
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

// views
import Home from "./views/home/home.jsx";
import Shop from "./views/shop/shop";
import Contact from "./views/contact/contact";
import About from "./views/about/about";
import CarDetailPage from "./views/detail/detailCar";
import PostNewCar from "./views/postNewCar/postNewCar";
import Dashboard from "./views/dashboard/dashboard";
import Delete from "./views/delete/delete";
import Register from "./views/register/register";
import Login from "./views/login/login";

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
          <Route path="/detail/:id" element={<CarDetailPage />} />
          <Route path="/post" element={<PostNewCar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
