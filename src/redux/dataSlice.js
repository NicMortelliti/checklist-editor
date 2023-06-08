import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  loading: false,
  error: null,
  selectedIndexId: 2,
  indexes: [
    {
      key: uuid(),
      text: 'Normal',
    },
    {
      key: uuid(),
      text: 'Non-Normal',
    },
    {
      key: uuid(),
      text: 'Procedure',
    },
  ],
  subIndexes: [
    {
      key: uuid(),
      text: 'Preflight',
    },
    {
      key: uuid(),
      text: 'Taxi',
    },
    {
      key: uuid(),
      text: 'Takeoff',
    },
  ],
  data: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    importFromJsonStart(state) {
      state.loading = true;
      state.error = null;
    },
    importFromJsonSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    importFromJsonFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    updateData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const {
  importFromJsonStart,
  importFromJsonSuccess,
  importFromJsonFailure,
  updateData,
} = dataSlice.actions;
export default dataSlice.reducer;
