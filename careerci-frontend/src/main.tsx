import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";

import "./firebase";

import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

import router from "./app/router";

import store from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
