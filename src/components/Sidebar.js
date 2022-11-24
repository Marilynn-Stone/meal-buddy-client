import React from 'react';

export default function Sidebar() {

  return (
  <div className="sidebar">
      <section className="sign-up-sign-in"> 
        <button className="sign-up-button">Sign Up</button>
        <button className="sign-in-button">Sign In</button>
      </section>
      <p className="sidebar-text">Menu</p>
      <p className="sidebar-text">Grocery List</p>
      <p className="sidebar-text">Settings</p>
  </div>
  );
}