import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AccountInfo({userID}) {

  //USER PERSONAL INFO STATES---------------------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //----------------------------------------------------------

  //USER DIETARY RESTRICTIONS STATES--------------------------
  const [caloricTarget, setCaloricTarget] = useState(2000);
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
  //----------------------------------------------------------

  // WILL BE MOVED TO HOOKS SERVER AND DB CALLS
  const accountInfoCall = (userID) => {
    return axios
      .post(
        "http://localhost:8080/users/accountInfo",
        {
          firstName,
          lastName,
          email,
          // password,
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
        { headers: { userID: userID } }
      )
      .then((response) => {
        console.log("account info call:", response);
      });
  };

  const accountInfoGet = (userID) => {
    return axios
      .get(`http://localhost:8080/users/accountInfo`, { headers: { userID: userID } })
      .then((result) => {
        console.log("account info get:", result);
        setFirstName(result.data.first_name);
        setLastName(result.data.last_name);
        setEmail(result.data.email);
        // setPassword(result.data.password);
        setPhoneNumber(result.data.cellphone_number);
        setCaloricTarget(result.data.caloric_target);
        setDietCategory(result.data.dietary_category);
        setGluten(result.data.gluten);
        setLactose(result.data.lactose);
        setPeanut(result.data.peanut);
        setFish(result.data.fish);
        setEgg(result.data.egg);
        setShellfish(result.data.shellfish);
        setTreeNuts(result.data.tree_nuts);
        setSoy(result.data.soy);
        setSesame(result.data.sesame);
      });
  };

  const navigate = useNavigate();
  const goMenu = () => {
    navigate("../tableMenu");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    accountInfoCall(userID);
    goMenu();
  };

  useEffect(() => {
    accountInfoGet(userID);
  }, []);

  return (
    <section className="sign-up">
      <div className="App">
        <div>
          <h1 className="sign-up-title">Account Settings</h1>
          <section className="sign-up-info">
            <form
              autoComplete="off"
              onSubmit={(event) => event.preventDefault()}
              className="user-info"
              id="user-info"
            >
              <label className="signup-label">First Name </label>
              <input
                value={firstName}
                type="text"
                name="first_name"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <br />
              <label className="signup-label">Last Name </label>

              <input
                value={lastName}
                type="text"
                name="last_name"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              <br />
              <label className="signup-label">Email </label>
              <input
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              {/* <label className="signup-label">Password </label>
              <input
                value={password}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input> */}
              <br />
              <label className="signup-label">Phone Number </label>
              <input
                value={phoneNumber}
                type="text"
                name="phone_number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <br />

              <section className="dietary-options">
                <label className="signup-label">Caloric Target </label>
                <input
                  value={caloricTarget}
                  type="number"
                  name="caloric-target"
                  onChange={(e) => setCaloricTarget(e.target.value)}
                ></input>
                <label className="signup-label">Dietary Category</label>
                <select
                  value={dietCategory}
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

              </section>
            </form>
            <button onClick={handleSubmit}>Submit</button>
          </section>
        </div>
      </div>
    </section>
  );
}
