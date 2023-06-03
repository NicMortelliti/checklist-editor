import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  selectedIndexId: 2,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducer: {
    importFromJson: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { importFromJson } = dataSlice.actions;
export default dataSlice.reducer;
