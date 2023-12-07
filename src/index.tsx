import * as React from "react";

import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { Auth0ProviderWithNavigate } from "./auth0ProviderWithNavigate";
import store from "./store";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithNavigate>
          <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
            <App />
          </ChakraProvider>
        </Auth0ProviderWithNavigate>
      </Router>
    </Provider>
  </React.StrictMode>
);
