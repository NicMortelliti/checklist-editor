import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
  modal: '',
  columns: [
    { title: '', key: 'rowAction' },
    { title: 'Text', key: 'text' },
    { title: 'Type', key: 'type' },
    { title: 'CAS Message', key: 'casMessage' },
    { title: 'Latchable', key: 'latchable' },
    {
      title: 'Auto Sensed Boolean',
      key: 'autoSensedBoolean',
    },
    {
      title: 'Invert Sensed Bool',
      key: 'invertSensedBool',
    },
    {
      title: 'Auto Reset Bool',
      key: 'autoResetBool',
    },
    { title: 'Timer Sec', key: 'timerSec' },
    {
      title: 'Sensed Timer Bool',
      key: 'sensedTimerBool',
    },
    { title: 'Synoptic Link', key: 'synopticLink' },
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
