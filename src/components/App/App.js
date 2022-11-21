import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
import Login from "../Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const App = () => (
    <div>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/list" component={List} /> */}
      </Routes>
    </div>
  );

  return (
    <Routes>
      <Header />
      <div className="App">
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
    </Routes>
  );
}

export default App;
