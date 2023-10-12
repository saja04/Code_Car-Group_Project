import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 

function DashboardButton() {
  const { isAuthenticated, user } = useAuth0();

  const isAdmin = isAuthenticated && user && user.email === 'elgilazo9123@gmail.com';

  return isAdmin ? (
    <Link to="/dashboard" className="settings-button">
      ⚙️
    </Link>
  ) : null;
}

export default DashboardButton;

