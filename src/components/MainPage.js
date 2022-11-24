import React from 'react';

import Sidebar from './Sidebar';

export default function MainPage() {
  return (
    <>
  <div className="App">
    <Sidebar />
    <div className="mainpage">
      <h1>Home Page "/"</h1>
      <p>Welcome to Meal Buddy!</p>
    </div>
  </div> 
  </>
  );
}