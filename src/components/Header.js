import { Link } from "react-router-dom";

import "./App/App";

export default function Header() {
  return (
    <div className="header">
      <Link to="login">Login</Link>
      <h3>Logout</h3>
      <h3>Sign up!</h3>
      <h3>Profile</h3>
      <h3>Account Settings</h3>
      <h3>Dietary Settings</h3>
    </div>
  );
}

// ROUTES

// - / (get)
// - /login (get, post)
// - / logout (post)
// - /sign up (get, create, delete)
// - /profile (get, post, update)
//      - /account info
//      -/dietary settings
