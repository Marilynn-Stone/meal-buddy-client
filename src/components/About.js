import Header from "./Header";
import Sidebar from "./Sidebar";

export default function About() {
  
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
   <section className="about-us">
    <h1>About Us</h1>
    <div>This MF app rules the skool! Let us tell you all about it...</div>
  </section>
  </div>
  </>
  );
}
