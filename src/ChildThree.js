import React from 'react';
import { ProviderData } from './ChildOne';
import ChildFour from './ChildFour';
const ChildThree = () => {
  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem',
        border: '1px solid black',
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      <ProviderData.Consumer>
        {(data) => {
          return <p>{data}</p>;
        }}
      </ProviderData.Consumer>
      <h1>This is child Three</h1>
      <ChildFour />
    </div>
  );
};
export default ChildThree;
