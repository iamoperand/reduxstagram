// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state

function posts(state = [], action) {
  console.log("The post will load");
  console.log(state, action);
  return state;
}

export default posts;