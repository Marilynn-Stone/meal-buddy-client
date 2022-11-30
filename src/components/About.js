export default function About() {
  
  const cookieValue = document.cookie
  .split('; ')
  .find((row) => row.startsWith('isUserLoggedIn'))
  ?.split('=')[1];

  console.log("cookie test:", cookieValue);
  
  return (
   <section className="about-us">
    <h1>About Us</h1>
    <div>This MF app rules the skool! Let us tell you all about it...</div>
  </section>
  );
}
