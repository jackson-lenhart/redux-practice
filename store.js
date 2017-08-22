const redux = require("redux");

const initialState = {
  value: 1,
  lastValue: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        value: state.value + action.payload,
        lastValue: state.value
      };
      break;
    default:
      break;
  }
  return state;
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 33
});

store.dispatch({
  type: "ADD",
  payload: 33
});
