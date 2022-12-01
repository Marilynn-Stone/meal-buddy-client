import axios from "axios";

export default function useServerAndDBCalls() {

  
  const loginCall = function(email, password) {
    
    document.cookie = "isUserLoggedIn=true";
    
    axios.post("http://localhost:8080/users/login", { email, password })
    .then((res) => {
      console.log(res);
      const session = res.data;
      return { session };
    })
    .catch((err) => {
      console.log(err.res.data);
    });
  };

  return { loginCall }

};