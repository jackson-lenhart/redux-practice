const redux = require("redux");

const mathReducer = (state = {
  value: 0,
  lastValue: null
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        value: state.value + action.payload,
        lastValue: state.value
      };
      break;
    case "SUBTRACT":
      state = {
        value: state.value - action.payload,
        lastValue: state.value
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (state = {
  name: "",
  age: 0
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        name: action.payload,
        age: state.age
      };
      break;
    case "SET_AGE":
      state = {
        name: state.name,
        age: action.payload
      };
    default:
      break;
  }
  return state;
};

const superReducer = redux.combineReducers({ mathReducer, userReducer });
const store = redux.createStore(superReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD",
  payload: "2"
});

store.dispatch({
  type: "SUBTRACT",
  payload: 5
});

store.dispatch({
  type: "SET_NAME",
  payload: "Jackson"
});

store.dispatch({
  type: "SET_AGE",
  payload: 23
});
