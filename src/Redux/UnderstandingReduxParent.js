import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Actions/index';
import './redux.css';
const UnderStandingReduxParent = () => {
  const data = useSelector((state) => {
    console.log(state);
    return state.changeStateOfcounter;
  });
  const dispatch = useDispatch();
  function getValueFrominput(e) {
    console.log(e);
  }
  function changeCounterValue(item) {
    if (item === 'INC') {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        height: '400px',
        border: '1px solid black',
        backgroundColor: '#E5B5FF',
        borderRadius: '5px',
      }}
    >
      <button
        onClick={() => {
          changeCounterValue('DEC');
        }}
      >
        -
      </button>
      <input type="number" value={data} onChange={getValueFrominput} />
      <button
        onClick={() => {
          changeCounterValue('INC');
        }}
      >
        +
      </button>
    </div>
  );
};
export default UnderStandingReduxParent;

// In redux we maintain a store for the data of our application
// Redux is a library which is used to maintain the application state using events called actions
// Its work is to keep the state of data to be predicatable through out the application
// For main parts of redux
// 1) Action -->  what to do {its a simple object which has a type field which holds the value of the action }
// 1.1) Action creator --> its a pure function which creates the action
// 2) Reducer --> How to do
// Reducer is a function which takes the action and current state as an argument and returns a new state
// 3) Store --> Object which hold the data of the application, ever redux store will have only one reducer function
// 4) Functions --> the functions that is associated with the store (dispath(action) , createStore)
