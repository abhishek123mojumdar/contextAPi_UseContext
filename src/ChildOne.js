import React, { createContext } from 'react';
import ChildTwo from './ChildTwo';
const ProviderData = createContext();
const ChildOne = () => {
  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem',
        border: '1px solid black',
        backgroundColor: 'yellow',
      }}
    >
      <p>This is child One</p>
      <ProviderData.Provider value={'Abhishek Mojumdar  '}>
        <ChildTwo />
      </ProviderData.Provider>
    </div>
  );
};
export default ChildOne;
export { ProviderData };
