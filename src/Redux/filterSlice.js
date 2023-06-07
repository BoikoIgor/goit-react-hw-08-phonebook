import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { contactsFilter } = filterSlice.actions;
// export const filterValue = state => state.filter;
