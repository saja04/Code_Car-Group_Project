import React from "react";
import { Link } from "react-router-dom";

function DashboardButton() {
  return (
    <Link to="/dashboard" className="settings-button">
      ⚙️
    </Link>
  );
}

export default DashboardButton;
