import { Link } from "react-router-dom";
import React from "react"; //optional

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="child bounce">MealBuddy</h1>
        <h3>
          <Link to={"/login"}></Link>Login
        </h3>
        <h3>
          <Link to={"/logout"}></Link>Logout
        </h3>
        <h3>
          <Link to={"/signUpPage"}></Link>Sign up!
        </h3>
        <h3>
          <Link to={"/dashboard"}></Link>Profile
        </h3>
        <h3>
          <Link to={"/accountInfo"}></Link>Account Settings
        </h3>
        <h3>
          <Link to={"/dietarySettings"}></Link>Dietary Settings
        </h3>
      </div>
    </>
  );
}
