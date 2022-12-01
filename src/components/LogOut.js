import { useNavigate } from "react-router-dom";

export default function LogOut() {

  const navigate = useNavigate();
  const goHome = () => {
    navigate("../")
  };
  const logout = () => {
    localStorage.removeItem("userID");
    goHome();
  }
 
  return (
    <>
      <div className="App">
      <div className="log-out-page">
        <h2>Log-Out Page</h2>
        <div>
          <button type="submit" onClick={logout}>Log Out</button>
        </div>  
      </div>
    </div>
    </>    
  );
}
