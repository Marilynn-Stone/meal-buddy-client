import React from 'react';
import AccountInfo from './AccountInfo';
import DietarySettings from './DietarySettings';

export default function Dashboard() {
  return (
    <>
      <section className="settings-page">
        <h1>Settings Dashboard- account and dietary settings</h1>
          <>
            <AccountInfo />
            <br />
            <DietarySettings />
            <br />
          </>
      </section>
    </>
  );
}
