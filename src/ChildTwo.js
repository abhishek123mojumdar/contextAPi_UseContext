import React, { createContext, useContext } from 'react';
import ChildThree from './ChildThree';
import { appData } from './App';
let childTwoContext1 = createContext();
let childTwoContext2 = createContext();
const ChildTwo = () => {
  let childTwoData = useContext(appData);
  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem',
        border: '1px solid black',
        backgroundColor: 'green',
      }}
    >
      <h1>This is child Two</h1>
      <childTwoContext1.Provider value={'Abhishek'}>
        <childTwoContext2.Provider value={'Mojumdar'}>
          <ChildThree />
        </childTwoContext2.Provider>
      </childTwoContext1.Provider>

      <p>{childTwoData.name}</p>
    </div>
  );
};
export default ChildTwo;
export { childTwoContext1, childTwoContext2 };
