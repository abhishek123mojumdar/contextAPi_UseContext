import React, { createContext } from 'react';
import './style.css';
import ChildOne from './ChildOne';
let appData = createContext();
export default function ParentForChild() {
  const appDataObject = {
    name: 'Abhishek',
    roll: 1205071,
    age: 29,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3>Context APi and useContext</h3>
      <appData.Provider value={appDataObject}>
        <ChildOne />
      </appData.Provider>
    </div>
  );
}

export { appData };
