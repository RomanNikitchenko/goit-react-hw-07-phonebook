import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../redux/phonebook/contsacts-actions';

const Filter = () => {
  const value = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={evt =>
          dispatch(contactsActions.filterChange(evt.target.value))
        }
      />
    </label>
  );
};

export default Filter;
