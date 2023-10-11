import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LogInAuth0 = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const getNoAuthenticated = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get("http://localhost:3001/userCheck",{
      headers: {
        authorization: `Bearer ${token}`,
      }});
    return console.log(response.data);
  };
  const callProtectedApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token);
      const response = await axios.get('http://localhost:3001/updateUser',{
      headers: {
        authorization: `Bearer ${token}`,
      }}
      )
        console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={loginWithRedirect}>Log in with redirect</button>


          <button onClick={getNoAuthenticated}>
            Traer datos con verificacion y crea el usuario
          </button>


          <button onClick={callProtectedApi}>
            Traer datos con autenticacion
          </button>

          
          {/* <button onClick={callProtectedApi}>get acces token</button> */}
          {isAuthenticated ? (
            <div>
              <button onClick={logout}>Log out</button>
              <p>{JSON.stringify(user, null, 2)}</p>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default LogInAuth0;
