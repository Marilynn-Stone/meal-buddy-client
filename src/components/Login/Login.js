import "./Login.scss";
import axios from 'axios';
import React, { useState } from 'react';

// import loginCall from "../../hooks/serverAndDBCalls"


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function loginCall(email, password) {
    axios.post("http://localhost:3001/login", { email, password })
      .then((response)=> {
        console.log(response);
        }).catch(error => console.log(error))
  }
  
  function onClick(email, password) {
    loginCall(email, password)
  }
  

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <label>
          <p>Email</p>
          <input 
            type="text" 
            name="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
          <button onClick={ () => onClick(email, password)} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
