import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
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
  data: [
    {
      key: uuid(),
      children_ids: [17, 2, 19],
      text: 'Normal',
      type: 'index',
      cas_message: '',
      latchable: '',
      auto_sensed_bool: '',
      invert_sensed_bool: '',
      auto_reset_bool: '',
      timer_sec: '',
      sensed_timer_bool: '',
      synoptic_link: '',
    },
  ],
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
