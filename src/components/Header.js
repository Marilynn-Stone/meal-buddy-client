import { Link } from "react-router-dom";
import React from 'react'; //optional

export default function Header(){
  return (
    <>
    <div className="header">
          
            <h1 className="child bounce">MealBuddy</h1>
            
         </div>
      
      </>

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
