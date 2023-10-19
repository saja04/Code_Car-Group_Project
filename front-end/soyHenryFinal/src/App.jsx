import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

//components
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

// views
import Home from "./views/home/home.jsx";
import Shop from "./views/shop/shop";
import About from "./views/about/about";
import CarDetailPage from "./views/detail/detailCar";
import Dashboard from "./views/dashboard/dashboard";
import Delete from "./views/delete/delete";
import LogInAuth0 from "./views/auth0-login/auth0login";
import User from "./views/user/user";
import DetailBuy from "./views/detailBuy/detailBuy";
import UserOrder from "./views/userOrders/userOrders";
import NotFound from "./views/notFound/notFound";

function MainApp() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/auth0/login" element={<LogInAuth0 />} />
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/detail/:id" element={<CarDetailPage />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated &&
              user &&
              user.email === "manuelgarciasarza@gmail.com" ? (
                <Dashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/delete" element={<Delete />} />
          <Route path="/user/" element={<User />} />
          <Route path="/detailBuy" element={<DetailBuy />} />
          <Route path="/userOrder" element={<UserOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
