import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mp4haipy0yoq4dta.us.auth0.com"
      clientId="EvCLt03uedOBBF4K7MrLGmxxh7sCDNNj"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience:'https://codecar.onrender.com'
      }}
      audience='https://codecar.onrender.com'
      scope='openid email profile'
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
