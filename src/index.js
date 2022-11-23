import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
