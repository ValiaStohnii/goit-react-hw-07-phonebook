import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  // filter: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({
        id: nanoid(),
        name: action.payload,
        number: action.payload,
      });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        user => user.id !== action.payload
      );
    },
    //  filterContact: (_, {payload}) => payload,
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactSelector = state => state.contact.contacts;
// export const filterSelector = state => state.contact.filter;
export const contactReducer = contactSlice.reducer;
