import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOnBoarding: (state, action) => ({
      ...state,
      onBoarding: action.payload,
    }),
  },
});

export const { setOnBoarding } = uiSlice.actions;
export default uiSlice.reducer;
