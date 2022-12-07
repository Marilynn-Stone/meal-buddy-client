import axios from "axios";

const loginCall = (email, password, setUserID) => {
  axios.post("http://localhost:8080/users/login", { email, password }, {withCredentials: true})
  .then((res) => {
    setUserID(res.data.user);
  })
  .catch((err) => {
    console.log("error with login", err.res.data);
  });
};

const weeklyMenuCall = function(user_id) {
  if (weeklyMenu.length != 0) {
    
  } else {
  return axios.post("http://localhost:8080/menu/weekly_menu", { user_id })
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((err) => {
    console.log(err);
  })
}
}

const recipeCall = function(meal_id) {
  return axios.get(`/menu/meal/${meal_id}`)
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((err) => {
    console.log(err);
  })
}

export { loginCall, weeklyMenuCall, recipeCall };