import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  indexes: [
    {
      id: uuid(),
      text: 'Normal',
    },
    {
      id: uuid(),
      text: 'Non-Normal',
    },
    {
      id: uuid(),
      text: 'Procedure',
    },
  ],
  subIndexes: [
    {
      id: uuid(),
      text: "Preflight"
    },
    {
      id: uuid(),
      text: "Taxi"
    },
    {
      id: uuid(),
      text: "Takeoff"
    }
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
