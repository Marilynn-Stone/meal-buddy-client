import "./Login.scss";
import "src/hooks/serverAndDBCalls.js"
import { get } from "request";

function onClick(email, password) {
  fetch()
}

export default function Login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input type="text" name="email" value={email}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" value={password}/>
        </label>
        <div>
          <button onClick={onClick(email, password)} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
