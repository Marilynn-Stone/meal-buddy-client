import { useState } from "react";
import { useCookies } from "react-cookie";
// import PropTypes from "prop-types";
import "./Login.scss";

async function loginUser(credentials) {
  // check to see what is being returned
  fetch("http://localhost:8080/api/users/login")
    .then((res) => res.text()) // convert to plain text
    .then((text) => console.log(text)); // then log it out

  return fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    // mode: "cors",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", {
        error,
      });
    });
}
export default function Login() {
  const [cookies, setCookie] = useCookies(["user"]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser({
      email,
      password,
    });
    setCookie("user", userData, {
      path: "/",
    });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {cookies.user && <p>{cookies.user}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
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

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
