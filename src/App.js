import React, { useState } from 'react';
import './style.css';
import ParentForChild from './ParentForChild';
import UnderstandingReduxParent from './Redux/UnderstandingReduxParent';
export default function App() {
  let [feature, setFeature] = useState('redux');

  const appDataObject = {
    name: 'Abhishek',
    roll: 1205071,
    age: 29,
  };

  function showFeature(item) {
    setFeature(item);
  }

  function showAvailableFeatures() {
    return (
      <>
        <ol
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '90vw',
          }}
        >
          <li
            onClick={() => {
              showFeature('redux');
            }}
          >
            Redux
          </li>
          <li
            onClick={() => {
              showFeature('context');
            }}
          >
            Context Api and useContext
          </li>
        </ol>
      </>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {showAvailableFeatures()}
      <hr />
      <h1>Hello State management</h1>
      {feature === 'context' ? (
        <ParentForChild />
      ) : (
        <UnderstandingReduxParent />
      )}
    </div>
  );
}

//In react if you have component structure like App --> child1 --> child2 --> child3 --> child4 and we want to pass data from child1 to child 4 , there is no way of doing it other than passing the props through each component (prop drilling) . This would create a long prop chain . To solve this problem we can use contextAPi and use context

// To use context APi there are 3 things that are important and we should remember
// 1. createContext --> this function helps to create a context corresponding to the component FROM which the data needs to be passed
// 2. Provider --> the context which has been created needs to provide the data into the component where then data is needed
// 3. Consumer --> the component in which the data is needed the consumer is created.
