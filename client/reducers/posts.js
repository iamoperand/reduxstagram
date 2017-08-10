// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
  switch(action.type) {

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
