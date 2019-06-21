import axios from 'axios';

import * as types from './actionTypes';

export const setSmurfs = smurfs => ({ type: types.GET_SMURFS, payload: smurfs });

export const getSmurfs = () => dispatch => {
  dispatch({ type: types.START_GETTING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch(setSmurfs(res.data));
    })
    .catch(error => console.log(error.message))
    .then(() => dispatch({ type: types.FINISH_GETTING_SMURFS }));
};

export const addSmurf = (name, age, height) => dispatch => {
  dispatch({ type: types.START_ADDING_SMURF });
  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => {
      dispatch(setSmurfs(res.data));
    })
    .catch(error => console.log(error.message))
    .then(() => dispatch({ type: types.FINISH_ADDING_SMURF }));
};

// export const updateSmurf = (id, name, age, height) => dispatch => {
//   axios
//     .get('http://localhost:3333/smurfs')
//     .then(res => {
//       dispatch({ type: types.GET_SMURFS, payload: res.data });
//     })
//     .catch(error => console.log(error.message));
// };

// export const deleteSmurf = id => dispatch => {};
