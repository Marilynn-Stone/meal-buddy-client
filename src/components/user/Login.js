import { useState } from "react";
import "../../styles/login.scss";
import loginCall from "../../hooks/serverAndDBCalls";

export default function Login(session) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(email, password)
  };

  return (
    <div className="login-wrapper">
      <h1>Please Sign-in</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
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
  );
}
