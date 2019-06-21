import axios from 'axios';

import * as types from './actionTypes';

export const setSmurfs = smurfs => ({ type: types.GET_SMURFS, payload: smurfs });

export const switchLoading = () => ({ type: types.SWITCH_LOADING });

export const setError = error => ({ type: types.SET_ERROR, payload: error });

export const getSmurfs = () => dispatch => {
  dispatch(switchLoading());
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch(setSmurfs(res.data));
    })
    .catch(error => dispatch(setError(error.message)))
    .then(() => dispatch(switchLoading()));
};

export const addSmurf = (name, age, height) => dispatch => {
  dispatch(switchLoading());
  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => {
      dispatch(setSmurfs(res.data));
    })
    .catch(error => dispatch(setError(error.message)))
    .then(() => dispatch(switchLoading()));
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
