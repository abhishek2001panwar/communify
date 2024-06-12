import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/Authcontext.jsx"; // Import your AuthProvider context

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NextUIProvider>
      <AuthProvider> {/* Wrap your App with the AuthProvider context */}
        <App />
      </AuthProvider>
    </NextUIProvider>
  </BrowserRouter>
);
