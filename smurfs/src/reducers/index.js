import * as types from '../actions/actionTypes';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SMURFS:
      return { ...state, smurfs: action.payload };
    case types.SWITCH_LOADING:
      return { ...state, loading: !state.loading };
    case types.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
