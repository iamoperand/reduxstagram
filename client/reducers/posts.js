// a reducer takes in 2 things:
// 1. a copy of current state
// 2. the action (info about what happened)

function posts(state = [], action) {

  switch(action.type) {
    case 'INCREMENT_LIKES':

      console.log("Increment likes!!!");
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1)
      ];


    default:
      return state;
  }
}
{/*
  reducers don't mutate the state, they behave like pure functions to state.
  The difference between impure and pure functions and how it affects the flow is
  explained in the links below:
  impure-functions: https://codepen.io/iamoperand/pen/NvgxJa/
  pure-function: https://codepen.io/iamoperand/pen/vJZLML/
*/}

export default posts;
