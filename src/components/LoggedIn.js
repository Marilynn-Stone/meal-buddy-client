import React from 'react';

export default function LoggedIn() {
  return (
    <>
      <section className="logged-in-view">
      <h1>User logged in view to replace log-in sign-up once user is signed-in</h1>
      <div className="header">
            <h1 className="child bounce">MealBuddy</h1>
            
         </div>
      <div className="App">
        <div className="sidebar">
          
          <img className="photo" src="https://iili.io/H2kPXAN.png" alt="Screen Shot 2022 11 23 at 7.01.55 PM" border="0"></img>
          <p>Welcome Back, <br /> Username!</p>

          <p className="sidebar-text">Menu</p>
          
          <p className="sidebar-text">Grocery List</p>
          
          <p className="sidebar-text">Settings</p>
        </div>
        <div className="mainpage">
          <h1>Home Page "/"</h1>
          
        </div>
      </div> 
        
      </section>
    </>
  );
}