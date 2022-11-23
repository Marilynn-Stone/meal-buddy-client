import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "../Header";
// import About from "../About";
import Home from "../Home";
import Login from "../Login/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Meal-Buddy</h1>
      <div className="App">
        <div>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="header" element={<Header />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
