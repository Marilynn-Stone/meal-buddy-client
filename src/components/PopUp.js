export default function PopUp() {
  return (
    <>
      <section className="pop-up-prompt">
        <div>
          <h1>Grocery List Saved.</h1>
          <h2>Would you like to send List as SMS text message?</h2>
        </div>
        
        <span>Phone Number:</span> <input type="text" placeholder="1-(###)-###-####"/>
        <div>
        <button>Cancel</button>
        <button>Send</button>
        </div>
      </section>
    </>
  );
}