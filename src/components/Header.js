import { Link } from "react-router-dom";
import React from "react"; //optional

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="child bounce">MealBuddy</h1>
        <h3>Login</h3>
        <h3>Logout</h3>
        <h3>Sign up!</h3>
        <h3>Profile</h3>
        <h3>Account Settings</h3>
        <h3>Dietary Settings</h3>
      </div>
    </>
  );
}
