import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state){
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

{/*
  App is a smart component of Main, which encloses the Main
  component with methods such as mapStateToProps and mapDispatchToProps.
*/}
