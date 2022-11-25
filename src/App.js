import { Route, Routes, Link } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import SignUpPage from "./components/SignUpPage";

//import GroceryList from './components/GroceryList/GroceryList';

// import useToken from "./useToken";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  // const App = () => (
  <div>
    <Routes>
      {/* <Route path="/list" component={GroceryList} /> */}
      <Route path="header" element={<Header />} />
      <Route path="login" element={<Login />} />
      <Route exact path="/" component={App} />
    </Routes>
  </div>;

  return (
    <>
      <Header />
      <MainPage />
      {/* <Button /> */}
      <Login />
      {/* <Modal>
        <SignUpPage />
      </Modal> */}
    </>
  );
}

export default App;
