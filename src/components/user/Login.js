import { useState } from "react";
// import { useCookies } from "react-cookie";
// import PropTypes from "prop-types";
import "./Login.scss";

import loginCall from "../../hooks/serverAndDBCalls";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    loginCall(email, password);
  }

  // const [cookies, setCookie] = useCookies(["user"]);

  // const handleSubmit = new Promise(function(resolve[,reject])) {
  //   e.preventDefault();
  //   const userData = await console.log("userData:", userData);
  //   loginCall({
  //     userData,
  //   });
  // setCookie("user", userData, {
  //   path: "/",
  // });
  // };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {/* {cookies.user && <p>{cookies.user}</p>} */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">
            {/* <button onClick={() => onClick(email, password)} type="submit"> */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
