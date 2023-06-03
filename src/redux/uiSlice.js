import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
  openedModalName: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOnBoarding: (state, action) => ({
      ...state,
      onBoarding: action.payload,
    }),
    setOpenedModal: (state, action) => ({
      ...state,
      openedModalName: action.payload,
    }),
  },
});

export const { setOnBoarding, setOpenedModal } = uiSlice.actions;
export default uiSlice.reducer;
