import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const DOMAIN = import.meta.env.VITE_DOMAIN
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const AUDIENCE= import.meta.env.VITE_AUDIENCE
const SCOPE = import.meta.env.VITE_SCOPE

import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain= {DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: AUDIENCE
      }}
      audience={AUDIENCE}
      scope={SCOPE}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
