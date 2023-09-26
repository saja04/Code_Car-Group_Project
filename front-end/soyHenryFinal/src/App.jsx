import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

//components
import NavBar from "./components/navBar/navBar";

// views
import Home from "./views/home/home.jsx";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
