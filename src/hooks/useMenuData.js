// import { useState, useEffect } from "react";
// import axios from "axios";

// const useMenuData = function(userid) {

//   const [weeklyMenu, setWeeklyMenu] = useState("")
  
//   useEffect(() => {
//     Promise(
//       axios.post("http://localhost:8080/menu", {userid})
//       .then((res) => {
//         console.log(JSON.stringify(res));
//         setWeeklyMenu = res;
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     )});
    
//   return (
//     <></>
//   );

// };

// module.exports = useMenuData;