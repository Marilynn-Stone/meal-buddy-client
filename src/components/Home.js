import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="Home">
        <div className="sidebar">
          <p className="sidebar-text">links to:</p>
          <li className="sidebar-text">About</li>
          <li className="sidebar-text">How To</li>
          <li className="sidebar-text">Menu</li>
        </div>
        <div className="mainpage">
          <h1>Home Page "/"</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
