import AccountInfo from './AccountInfo';
import DietarySettings from './DietarySettings';

export default function Dashboard() {
  return (
    <>
      <div className="App">
        <section className="settings-page">
          <>
            <AccountInfo />
            <br />
            <DietarySettings />
            <br />
          </>
        </section>
      </div>
    </>
  );
}
