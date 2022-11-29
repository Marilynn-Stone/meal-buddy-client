export default function LogOut() {

  document.cookie = "isUserLoggedIn=false";

  const cookieValue = document.cookie
  .split('; ')
  .find((row) => row.startsWith('isUserLoggedIn'))
  ?.split('=')[1];

  console.log("cookie test:", cookieValue);

  return (
    <div>
      <h2>SignOutPage</h2>
      <div>
        <button type="submit">Log Out</button>
      </div>  

    </div>
    
  );
}
