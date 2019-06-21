import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import './App.css';

const App = ({ getSmurfs, loading, error }) => {
  useEffect(() => {
    getSmurfs();
  }, []);

  const renderPage = () => {
    if (error) {
      return <div>An error occured</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <SmurfForm />
        <SmurfList />
      </React.Fragment>
    );
  };

  return <div className="App">{renderPage()}</div>;
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getSmurfs: actions.getSmurfs },
)(App);
