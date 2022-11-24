import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import "./index.scss";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Router>
);
