import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
