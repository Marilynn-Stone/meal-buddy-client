import Header from "../Header";
import Sidebar from "../Sidebar";

export default function DietarySettings() {
  
  
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
    
    <section className="controls-settings">
      <h1>Dietary Settings</h1>
      <input
        type="number"
        placeholder="Calories (e.g 2000)"
      />
      <input type="text" placeholder="diet" />
      <input type="text" placeholder="exclude" />
    </section>
    </div>
    </>
  );
}
