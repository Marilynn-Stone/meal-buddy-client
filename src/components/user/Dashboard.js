import React from 'react';
import AccountInfo from './AccountInfo';
import DietarySettings from './DietarySettings';
import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
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
