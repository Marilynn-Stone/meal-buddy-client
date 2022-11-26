import React from "react";

export default function SignUp() {
  const submitForms = function () {
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
  };

  return (
    <section className="sign-up">
      <h1 className="sign-up-title">Sign-up</h1>
      <section className="sign-up-info">
        <form
          className="user-info"
          id="user-info"
          method="POST"
          action="/signup"
        >
          <label className="signup-label">First Name </label>
          <input type="text" name="first-name"></input>
          <label className="signup-label">Last Name </label>
          <input type="text" name="last-name"></input>
          <label className="signup-label">Email </label>
          <input type="email" name="email"></input>
          <label className="signup-label">Password </label>
          <input type="password" name="password"></input>
          <label className="signup-label">Phone Number </label>
          <input type="text" name="phone-number"></input>
        </form>
        <form id="dietary-options" method="POST" action="/signup">
          <section className="dietary-options">
            <label className="signup-label">Caloric Target </label>
            <input type="number" name="caloric-target"></input>
            <label className="signup-label">Dietary Category</label>
            <select name="dietary-category">
              <option value="gluten-free">Gluten Free</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="vegetarian">Vegetartian</option>
              <option value="lacto-vegetarian">Lacto-Vegetartian</option>
              <option value="ovo-vegetarian">Ovo-Vegetartian</option>
              <option value="vegan">Vegan</option>
              <option value="pescetarian">Pescetarian</option>
              <option value="paleo">Paleo</option>
              <option value="primal">Primal</option>
              <option value="low-fodmap">Low FODMAP</option>
              <option value="whole30">Whole30</option>
            </select>
            <label className="signup-label">Dietary Restrictions</label>
            <section className="restrictions">
              <label>Gluten</label>
              <input type="checkbox" name="gluten"></input>
              <label>lactose</label>
              <input type="checkbox" name="lactose"></input>
              <label>Peanut</label>
              <input type="checkbox" name="peanut"></input>
              <label>Fish</label>
              <input type="checkbox" name="fish"></input>
              <label>Eggs</label>
              <input type="checkbox" name="eggs"></input>
              <label>Shellfish</label>
              <input type="checkbox" name="shellfish"></input>
              <label>Tree Nuts</label>
              <input type="checkbox" name="tree-nuts"></input>
              <label>Soy</label>
              <input type="checkbox" name="soy"></input>
              <label>Sesame</label>
              <input type="checkbox" name="sesame"></input>
            </section>
            <label className="signup-label">Other </label>
            <input type="text" name="restriction"></input>
          </section>
        </form>
        <input
          className="sign-up-button"
          type="button"
          value="Submit"
          onclick="submitForms()"
        />
      </section>
    </section>
  );
}
