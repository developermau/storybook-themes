import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WrapperThemeProvider from "./providers/WrapperThemeProvider/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WrapperThemeProvider>
      <App />
    </WrapperThemeProvider>
  </React.StrictMode>,
);
