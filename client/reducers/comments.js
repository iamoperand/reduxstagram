// a reducer takes in 2 things:
// 1. a copy of current state
// 2. the action (info about what happened)

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
    case 'REMOVE_COMMENT':
    default:
  }
  return state;
}
function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
