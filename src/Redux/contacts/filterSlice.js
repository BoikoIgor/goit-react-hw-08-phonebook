import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      return (state = '');
    });
  },
});

export const filterReducer = filterSlice.reducer;
export const { contactsFilter } = filterSlice.actions;
