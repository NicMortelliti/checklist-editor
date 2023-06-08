import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onBoarding: true,
  openedModalName: '',
  columns: [
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
      editable: true,
      required: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      editable: true,
      required: true,
    },
    {
      title: 'CAS Message',
      dataIndex: 'cas_message',
      key: 'casMessage',
      editable: true,
      required: false,
    },
    {
      title: 'Latchable',
      dataIndex: 'latchable',
      key: 'latchable',
      editable: true,
      required: false,
    },
    {
      title: 'Auto Sensed Boolean',
      dataIndex: 'auto_sensed_boolean',
      key: 'autoSensedBoolean',
      editable: true,
      required: false,
    },
    {
      title: 'Invert Sensed Bool',
      dataIndex: 'invert_sensed_bool',
      key: 'invertSensedBool',
      editable: true,
      required: false,
    },
    {
      title: 'Auto Reset Bool',
      dataIndex: 'auto_reset_bool',
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
    {
      title: 'Sensed Timer Bool',
      dataIndex: 'sensed_timer_bool',
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
