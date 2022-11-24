import { Route, Routes, Link } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
// import About from "../About";
// import Home from "../Home";
import Login from "../Login/Login";
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
        <Route path="header" element={<Header />} />
        <Route path="login" element={<Login />} />
        <Route exact path="/" component={App} />
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
            <li className="sidebar-text">About</li>
            <li className="sidebar-text">How To</li>
            <li className="sidebar-text">Menu</li>
          </div>
          <div className="mainpage">
            <App />
            <h1>Home Page "/"</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
