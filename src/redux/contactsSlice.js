import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [
    {
      id: 'id-1',
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: 'id-2',
      name: 'Hermione Kline',
      number: '443-89-12',
    },
  ],
};

const slice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
