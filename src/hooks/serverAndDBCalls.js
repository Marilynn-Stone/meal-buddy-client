import axios from 'axios';

export default function loginCall(email, password) {
  axios.post("http://localhost:3001/login", { email, password })
    .then((response)=> {
      console.log(response);
      }).catch(error => console.log(error))
}

