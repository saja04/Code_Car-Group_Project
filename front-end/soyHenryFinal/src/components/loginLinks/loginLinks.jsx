import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./loginLinks.module.css";

function LoginLinks() {

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


  return (
    <div className="container"> 
    <ul>
      
      {!isAuthenticated ? (
        
          
          <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
        
      ) : (
       
         
          <button onClick={logout}>Log out</button>
        
      )}
    </ul>
  </div>
);
}

export default LoginLinks;
