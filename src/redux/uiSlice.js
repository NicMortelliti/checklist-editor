import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
  modal: '',
  columns: [
    { title: '' }, // Action column
    { title: 'Text' },
    { title: 'Type' },
    { title: 'CAS Message' },
    { title: 'Latchable' },
    { title: 'Auto Sensed Boolean' },
    { title: 'Invert Sensed Bool' },
    { title: 'Auto Reset Bool' },
    { title: 'Timer Sec' },
    { title: 'Sensed Timer Bool' },
    { title: 'Synoptic Link' },
  ],
  typeColors: {
    index: 'teal',
    'sub-index': 'cyan',
    checklist: 'messenger',
    'conditional-parent': 'orange',
    'conditional-child': 'yellow',
    'msli-parent': 'pink',
    'msli-child': 'red',
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOnBoarding: (state, action) => ({
      ...state,
      onBoarding: action.payload,
    }),
    setModal: (state, action) => ({
      ...state,
      modal: action.payload,
    }),
  },
});

export const { setOnBoarding, setModal } = uiSlice.actions;
export default uiSlice.reducer;
