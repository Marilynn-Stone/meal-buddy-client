import axios from 'axios';
// import { remainingSpots } from "helpers/remainingSpots";

export default function serverAndDBCalls() {

  function login(email, password) {
    return axios.put(`/login`, {email, password})
      .then((response) => {
        console.log(response)
      })
  }

  return { login }

}