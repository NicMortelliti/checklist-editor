import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
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
  rowActions: ['Add Child Item', 'Delete'],
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
