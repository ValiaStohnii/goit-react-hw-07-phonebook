import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
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
    filterContact: (state, action) => {
      state.filter = state.contacts.filter(user =>
        user.name.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
export const contactSelector = state => state.contact.contacts;
export const contactReducer = contactSlice.reducer;
