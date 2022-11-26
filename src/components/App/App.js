import { Route, Routes, Link } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
import About from "../About";
// import Home from "../Home";
import Login from "../user/Login";
import MainPage from "../MainPage";
// import Menu from "../Menu/Menu";
// import GroceryList from "../GroceryList/GroceryList";

// import useToken from "./useToken";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  const App = () => (
    <div>
      <Routes>
        {/* <Route path="/list" component={GroceryList} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );

  return (
    <>
      <Header />
      <div className="wrapper">
        <h1>Meal-Buddy</h1>
        <div className="Home">
          <div className="sidebar">
            <p className="sidebar-text">links to:</p>
            <li className="sidebar-text">
              <Link to={"/about"}></Link>About
            </li>
            <li className="sidebar-text">
              <Link to={"/howTo"}></Link>How To
            </li>
            <li className="sidebar-text">
              <Link to={"/menu"}></Link>Menu
            </li>
          </div>
          <div className="mainpage">
            <App />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
