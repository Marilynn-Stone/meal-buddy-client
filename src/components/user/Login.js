import { useState } from "react";
import "../../styles/login.scss";
import { loginCall } from "../../hooks/serverAndDBCalls";
import { useNavigate } from "react-router-dom";

export default function Login({setUserID}) {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const goHome = () => {
    navigate("../")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(email, password, setUserID)
    setEmail("");
    setPassword("");
    goHome();
  };

  return (
    <>
      <div className="App">
      <div className="login-wrapper">      
        <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Please Sign-in</h1>
        <br />
          <label>
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
              <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
    </>
 
  );
}
