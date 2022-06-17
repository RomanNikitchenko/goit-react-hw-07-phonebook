import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './Contsacts-actions';

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  filter: filter,
});
