import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: (_, { payload }) => payload,
  },
});

export const { filterContact } = filterSlice.actions;
export const filterSelector = state => state.contact.contacts;
export const filterReducer = filterSlice.reducer;
