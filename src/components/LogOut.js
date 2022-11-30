import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LogOut() {

  return (

    <div className="log-out-page">
      <Header />
      <div className="App">
        <Sidebar />
        <div className="log-out-page-section">
          <h2>Log-Out Page</h2>
          <p>are we even using this page or a redirect?</p>
          
          <button type="submit">Log Out</button>
        </div>  
      </div>

    </div>
    
  );
}
