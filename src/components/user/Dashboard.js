import AccountInfo from "./AccountInfo";

export default function Dashboard({userID}) {
  return (
    <>
      <div className="App">
        <section className="settings-page">
          <>
            <AccountInfo userID={userID}/>
            <br />
            <br />
          </>
        </section>
      </div>
    </>
  );
}
