
export default function AccountInfo() {
  return (
    <>
        <div className="account-info">
          <br />
          <br />
          <span><h2>AccountInfo</h2></span>
          <button>Edit</button>
          

          <label className="signup-label">First Name </label>
          <input
            type="text"
            name="first_name"
          ></input>
          <label className="signup-label">Last Name </label>
          <input
            type="text"
            name="last_name"
          ></input>
          <label className="signup-label">Email </label>
          <input
            type="email"
            name="email"
          ></input>
          <label className="signup-label">Password </label>
          <input
            type="password"
            name="password"
          ></input>
          <label className="signup-label">Phone Number </label>
          <input
            type="text"
            name="phone_number"
          ></input>
          </div>
          
    </>
  );
};