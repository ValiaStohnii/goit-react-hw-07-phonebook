import React from 'react';
// import { useState } from 'react';
import { useFilterContactMutation } from 'redux/slice/contactsSlice';

// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from '../redux/contacts/contacts-selectors';
// import contactsAction from '../redux/contacts/contacts-actions';

const Filter = () => {
  const [filterContact] = useFilterContactMutation();
  //   const value = useSelector(getFilter);
  //   const dispatch = useDispatch();

  const filterChange = e => {
    filterContact(e.currentTarget.value);
  };

  return (
    <label>
      Filter
      <input
        type="text"
        // value={value}
        onChange={filterChange}
      ></input>
    </label>
  );
};

export default Filter;
