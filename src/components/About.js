export default function About() {
  
  const cookieValue = document.cookie
  .split('; ')
  .find((row) => row.startsWith('isUserLoggedIn'))
  ?.split('=')[1];

  console.log("cookie test:", cookieValue);
  
  return (
   

    <div>This MF app rules the skool! Let us tell you all about it...</div>
  );
}
