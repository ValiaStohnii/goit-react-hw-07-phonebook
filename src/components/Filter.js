import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice/filterSlice';
import { useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const filterChange = e => {
    console.log(e);
    setFilter(e.currentTarget.value);
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label>
      Filter
      <input type="text" value={filter} onChange={filterChange}></input>
    </label>
  );
};

export default Filter;
