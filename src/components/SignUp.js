import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp({setUserID}) {
  //USER PERSONAL INFO STATES---------------------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //----------------------------------------------------------

  //USER DIETARY RESTRICTIONS STATES--------------------------
  const [caloricTarget, setCaloricTarget] = useState("");
  const [dietCategory, setDietCategory] = useState("");
  const [gluten, setGluten] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [peanut, setPeanut] = useState(false);
  const [fish, setFish] = useState(false);
  const [egg, setEgg] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [treeNuts, setTreeNuts] = useState(false);
  const [soy, setSoy] = useState(false);
  const [sesame, setSesame] = useState(false);

  // WILL BE MOVED TO HOOKS SERVER AND DB CALLS
  const signupCall = ({setUserID}) => {
    return axios
      .post(
        "/users/signup",
        {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          caloricTarget,
          dietCategory,
          gluten,
          lactose,
          peanut,
          fish,
          egg,
          shellfish,
          treeNuts,
          soy,
          sesame,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setUserID(response.data.user);
        console.log("HELLO", response.data);
      });
  };

  const navigate = useNavigate();
  const goHome = () => {
    navigate("../WelcomeTo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupCall(setUserID);
    goHome();
  };

  return (
    <section className="sign-up">
        <div>
          
          <section className="sign-up-info">
          
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="user-info"
              id="user-info"
            >
              <h1 className="sign-up-title">Sign-up</h1>
              <br />
              <label className="signup-label">First Name </label>

              <input
                type="text"
                name="first_name"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <br />
              <label className="signup-label">Last Name </label>

              <input
                type="text"
                name="last_name"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              <br />
              <label className="signup-label">Email </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <label className="signup-label">Password </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <p className="sign-up-helper">
                Password must be 8 characters and include a special character
                (!@#$%)
              </p>
              <br />
              <label className="signup-label">Phone Number </label>
              <input
                type="text"
                name="phone_number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <br />

              <section className="dietary-options">
                <label className="signup-label">Caloric Target </label>
                <input
                  type="number"
                  name="caloric-target"
                  onChange={(e) => setCaloricTarget(e.target.value)}
                ></input>
                <p className="sign-up-helper">target is for daily goal</p>
                <p className="sign-up-helper">
                  general recommended daily calories is 2,000 for women and
                  2,500 for men
                </p>
                <label className="signup-label">Dietary Category</label>
                <select
                  name="dietary-category"
                  onChange={(e) => setDietCategory(e.target.value)}
                >
                  <option value="none">None</option>
                  <option value="gluten-free">Gluten Free</option>
                  <option value="ketogenic">Ketogenic</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                  <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="pescetarian">Pescetarian</option>
                  <option value="paleo">Paleo</option>
                  <option value="primal">Primal</option>
                  <option value="low-fodmap">Low FODMAP</option>
                  <option value="whole30">Whole30</option>
                </select>
                <p className="sign-up-helper">
                  Check our how to for more details on diets
                </p>
                <br />
                <div className="footer-container">
                  <label className="signup-label">Dietary Restrictions</label>
                  <section className="restrictions">
                    <label>Gluten</label>
                    <input
                      type="checkbox"
                      name="gluten"
                      checked={gluten}
                      onChange={(e) => setGluten(!gluten)}
                    ></input>
                    <br />
                    <label>lactose</label>
                    <input
                      type="checkbox"
                      name="lactose"
                      checked={lactose}
                      onChange={(e) => setLactose(!lactose)}
                    ></input>

                    <br />
                    <label>Peanut</label>
                    <input
                      type="checkbox"
                      name="peanut"
                      checked={peanut}
                      onChange={(e) => setPeanut(!peanut)}
                    ></input>

                    <br />
                    <label>Fish</label>
                    <input
                      type="checkbox"
                      name="fish"
                      checked={fish}
                      onChange={(e) => setFish(!fish)}
                    ></input>

                    <br />
                    <label>Eggs</label>
                    <input
                      type="checkbox"
                      name="egg"
                      checked={egg}
                      onChange={(e) => setEgg(!egg)}
                    ></input>

                    <br />
                    <label>Shellfish</label>
                    <input
                      type="checkbox"
                      name="shellfish"
                      checked={shellfish}
                      onChange={(e) => setShellfish(!shellfish)}
                    ></input>

                    <br />
                    <label>Tree Nuts</label>
                    <input
                      type="checkbox"
                      name="tree-nuts"
                      checked={treeNuts}
                      onChange={(e) => setTreeNuts(!treeNuts)}
                    ></input>

                    <br />
                    <label>Soy</label>
                    <input
                      type="checkbox"
                      name="soy"
                      checked={soy}
                      onChange={(e) => setSoy(!soy)}
                    ></input>

                    <br />
                    <label>Sesame</label>
                    <input
                      type="checkbox"
                      name="sesame"
                      checked={sesame}
                      onChange={(e) => setSesame(!sesame)}
                    ></input>
                </section>
                {/* <label className="signup-label">Other </label>
                <input type="text" name="restriction"></input> */}
                </div>
              </section>
             
            </form>
            <button type="submit">Submit</button>
          </section>
          
        </div>
        
      
    </section>
  );
}
