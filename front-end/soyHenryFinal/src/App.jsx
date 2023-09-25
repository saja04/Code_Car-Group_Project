import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

// components
import Home from "./views/home/home.jsx";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
