import axios from "axios";

const loginCall = (email, password) => {

    axios.post("http://localhost:8080/users/login", { email, password }, {withCredentials: true})
    .then((res) => {
      console.log("res.data:", res.data);
      localStorage.setItem("userID", res.data.user);
    })
    .catch((err) => {
      console.log("error with login", err.res.data);
    });
  };

  export { loginCall };