import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import { CookiesProvider } from "react-cookie";
import "./index.scss";
import App from "./components/App/App";
import About from "./components/About";
import SignInPage from "./components/SignInPage";
import Menu from "./components/Menu/Menu";
import GroceryList from "./components/GroceryList/GroceryList";
import SignUpPage from "./components/SignUpPage";
import SignOutPage from "./components/SignOutPage";
import UserIndex from "./components/user/UserIndex";
import HowTo from "./components/HowTo";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    {/* <CookiesProvider> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signUp" element={<SignUpPage />} />
      <Route path="login" element={<SignInPage />} />
      <Route path="logout" element={<SignOutPage />} />
      <Route path="menu/:id" component={<Menu />} />
      <Route path="profile/:id" element={<UserIndex />} />
      <Route path="GroceryList" element={<GroceryList />} />
      <Route path="AboutUs" element={<About />} />
      <Route path="HowTo" element={<HowTo />} />
    </Routes>
    {/* </CookiesProvider> */}
  </Router>
);
