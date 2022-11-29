import Header from "./Header";
import Sidebar from "./Sidebar";


export default function MainPage() {
  return (
    <>
    <Header />
    <div className="App">
      <div className="sidebar">
        <p className="sidebar-text">Menu</p>
        <p className="sidebar-text">Grocery List</p>
        <p className="sidebar-text">Settings</p>
      </div>
      <div className="mainpage">
        <h1>Welcome to the Meal Buddy Home Page</h1>
        <p>About Us Blurb...</p>
      </div>
    </div> 
    </>
  );
}