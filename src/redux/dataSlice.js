import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  indexes: [
    {
      id: uuid(),
      text: 'Normal',
    },
  ],
  data: [],
  selectedIndexId: 2,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    importFromJson: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { importFromJson } = dataSlice.actions;
export default dataSlice.reducer;
