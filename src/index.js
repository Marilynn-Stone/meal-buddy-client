import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import About from "./components/About";
import Menu from "./components/Menu/Menu";
import GroceryList from "./components/GroceryList/GroceryList";
import Login from "./components/user/Login";
import LogOut from "./components/LogOut";
import UserIndex from "./components/user/UserIndex";
import HowTo from "./components/HowTo";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<LogOut />} />
      <Route path="menu/:id" component={<Menu />} />
      <Route path="profile/:id" element={<UserIndex />} />
      <Route path="GroceryList" element={<GroceryList />} />
      <Route path="AboutUs" element={<About />} />
      <Route path="HowTo" element={<HowTo />} />
    </Routes>
  </Router>
);
