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
      editable: true,
      required: false,
    },
    {
      title: 'Invert Sensed Bool',
      key: 'invertSensedBool',
      editable: true,
      required: false,
    },
    {
      title: 'Auto Reset Bool',
      key: 'autoResetBool',
      editable: true,
      required: false,
    },
    {
      title: 'Timer Sec',
      dataIndex: 'timer_sec',
      key: 'timerSec',
      editable: true,
      required: false,
    },
    { title: 'Timer Sec', key: 'timerSec' },
    {
      title: 'Sensed Timer Bool',
      key: 'sensedTimerBool',
      editable: true,
      required: false,
    },
    {
      title: 'Synoptic Link',
      dataIndex: 'synoptic_link',
      key: 'synopticLink',
      editable: true,
      required: false,
    },
    { title: 'Synoptic Link', dataIndex: 'synoptic_link', key: 'synopticLink' },
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
