import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
  openedModalName: '',
  columns: [
    { title: 'Tree', dataIndex: 'text', key: 'text' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'CAS Message', dataIndex: 'cas_message', key: 'casMessage' },
    // {
    //   title: 'Number Of Lines',
    //   dataIndex: 'number-of_lines',
    //   key: 'numberOfLines',
    // },
    { title: 'Latchable', dataIndex: 'latchable', key: 'latchable' },
    {
      title: 'Auto Sensed Boolean',
      dataIndex: 'auto_sensed_boolean',
      key: 'autoSensedBoolean',
    },
    {
      title: 'Invert Sensed Bool',
      dataIndex: 'invert_sensed_bool',
      key: 'invertSensedBool',
    },
    {
      title: 'Auto Reset Bool',
      dataIndex: 'auto_reset_bool',
      key: 'autoResetBool',
    },
    { title: 'Timer Sec', dataIndex: 'timer_sec', key: 'timerSec' },
    {
      title: 'Sensed Timer Bool',
      dataIndex: 'sensed_timer_bool',
      key: 'sensedTimerBool',
    },
    { title: 'Synoptic Link', dataIndex: 'synoptic_link', key: 'synopticLink' },
  ],
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
