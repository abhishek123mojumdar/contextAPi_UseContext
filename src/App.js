import React, { createContext } from 'react';
import './style.css';
import ChildOne from './ChildOne';
let appData = createContext();
export default function App() {
  const appDataObject = {
    name: 'Abhishek',
    roll: 1205071,
    age: 29,
  };
  return (
    <div>
      <h1>Hello Context APi</h1>
      <appData.Provider value={appDataObject}>
        <ChildOne />
      </appData.Provider>
    </div>
  );
}

export { appData };

//In react if you have component structure like App --> child1 --> child2 --> child3 --> child4 and we want to pass data from child1 to child 4 , there is no way of doing it other than passing the props through each component (prop drilling) . This would create a long prop chain . To solve this problem we can use contextAPi and use context

// To use context APi there are 3 things that are important and we should remember
// 1. createContext --> this function helps to create a context corresponding to the component FROM which the data needs to be passed
// 2. Provider --> the context which has been created needs to provide the data into the component where then data is needed
// 3. Consumer --> the component in which the data is needed the consumer is created.
