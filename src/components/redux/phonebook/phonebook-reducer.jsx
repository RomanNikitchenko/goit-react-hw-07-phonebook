import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from 'components/redux/phonebook/contsactsActions';

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  filter: filter,
});
