import axios from "axios";

export default function loginCall(email, password) {
  axios
    .post("http://localhost:8080/users/login", { email, password })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}
