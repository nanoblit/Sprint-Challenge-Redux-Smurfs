import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import './App.css';

const App = ({ getSmurfs }) => {
  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default connect(
  null,
  { getSmurfs: actions.getSmurfs },
)(App);
