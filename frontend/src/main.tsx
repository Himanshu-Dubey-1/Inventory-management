
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

createRoot(document.getElementById("root")!).render(
    <Auth0Provider
    domain="dev-0me06qwpvb5cdfh6.us.auth0.com"
    clientId="IXzd2z8J8K3rqROeDbhuQO3Q4zHqUare"
    authorizationParams={{
      redirect_uri: window.location.origin,
      scope: "openid profile email"
    }}
  >
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>,
);
