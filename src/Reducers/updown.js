let initState = 0;
const changeStateOfcounter = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (state = state + 1);
    case 'DECREMENT':
      return (state = state - 1);
    default:
      return state;
  }
};

export default changeStateOfcounter;
