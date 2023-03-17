import React from 'react';
import { childTwoContext1, childTwoContext2 } from './ChildTwo';
const ChildFour = () => {
  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem',
        border: '1px solid black',
        backgroundColor: 'orange',
        color: 'white',
      }}
    >
      <p>This is the 4th child</p>
      <childTwoContext1.Consumer>
        {(data1) => {
          return (
            <childTwoContext2.Consumer>
              {(data2) => {
                return (
                  <p>
                    The full name of the developer is {data1} {data2}
                  </p>
                );
              }}
            </childTwoContext2.Consumer>
          );
        }}
      </childTwoContext1.Consumer>
    </div>
  );
};
export default ChildFour;
