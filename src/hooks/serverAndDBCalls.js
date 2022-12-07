import axios from "axios";

const loginCall = (email, password, setUserID) => {
  axios
    .post(
      "http://localhost:8080/users/login",
      { email, password },
      { withCredentials: true }
    )
    .then((res) => {
      setUserID(res.data.user);
    })
    .catch((err) => {
      console.log("error with login", err.res.data);
    });
};

const weeklyMenuCall = function (user_id) {
  return axios
    .post("http://localhost:8080/menu/weekly_menu", { user_id })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const replaceWeeklyMenuCall = function (user_id) {
  return axios
    .post("http://localhost:8080/menu/replace_weekly_menu", { user_id })
    .then((response) => {
      return response.data;
    });
};

const recipeCall = function (meal_id) {
  return axios
    .get(`/menu/meal/${meal_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { loginCall, weeklyMenuCall, replaceWeeklyMenuCall, recipeCall };
