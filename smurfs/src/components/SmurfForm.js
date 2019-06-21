import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const SmurfForm = ({ addSmurf }) => {
  const nameRef = React.createRef();
  const ageRef = React.createRef();
  const heightRef = React.createRef();

  const handleAddSmurf = e => {
    e.preventDefault();
    addSmurf(nameRef.current.value, ageRef.current.value, heightRef.current.value);
    nameRef.current.value = '';
    ageRef.current.value = '';
    heightRef.current.value = '';
  };

  return (
    <form onSubmit={handleAddSmurf}>
      <input ref={nameRef} placeholder="Name" required />
      <input ref={ageRef} placeholder="Age" required />
      <input ref={heightRef} placeholder="Height" required />
      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default connect(
  null,
  { addSmurf: actions.addSmurf },
)(SmurfForm);
