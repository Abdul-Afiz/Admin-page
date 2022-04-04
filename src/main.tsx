import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkmode-context";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
