import React from 'react';
import { connect } from 'react-redux';

const SmurfList = ({ smurfs }) => (
  <div>
    {smurfs.map(({
      name, age, height, id,
    }) => (
      <div key={id}>
        <h1>{name}</h1>
        <p>age: {age}</p>
        <p>height: {height}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({ smurfs: state.smurfs });

export default connect(
  mapStateToProps,
  {},
)(SmurfList);
