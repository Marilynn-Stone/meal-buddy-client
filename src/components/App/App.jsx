import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "../Home";
import About from "../About";
// import Header from "../Header";
import Login from "../Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
