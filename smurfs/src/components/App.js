import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SmurfList from './SmurfList';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = ({ getSmurfs }) => {
  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <div className="App">
      <SmurfList />
    </div>
  );
};

export default connect(
  null,
  { getSmurfs: actions.getSmurfs },
)(App);
