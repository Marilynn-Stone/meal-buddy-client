import Header from "./Header";
import Sidebar from "./Sidebar";


export default function MainPage() {
  return (
    <>
    <Header />
    <div className="App">
      <Sidebar />
      <div className="mainpage">
        <h1>Welcome to the Meal Buddy Home Page</h1>
        <p>This is the mainpage at /</p>
      </div>
    </div> 
    </>
  );
}