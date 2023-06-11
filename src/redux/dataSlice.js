import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const indexTemplate = {
  id: uuid(),
  text: '',
  type: 'index',
  cas_message: '',
  latchable: '',
  auto_sensed_bool: '',
  invert_sensed_bool: '',
  auto_reset_bool: '',
  timer_sec: '',
  sensed_timer_bool: '',
  synoptic_link: '',
  children: [],
};

const initialState = {
  loading: false,
  error: null,
  selectedIndex: '',
  selectedSubIndex: '',
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
    setSelectedIndex: (state, action) => ({
      ...state,
      selectedIndex: action.payload,
    }),
    setSelectedSubIndex: (state, action) => ({
      ...state,
      selectedSubIndex: action.payload,
    }),
    addNewIndexItem: (state, action) => ({
      ...state,
      data: [...state.data, { ...indexTemplate, ...action.payload }],
    }),
  },
});

export const {
  importFromJsonStart,
  importFromJsonSuccess,
  importFromJsonFailure,
  setSelectedIndex,
  setSelectedSubIndex,
  addNewIndexItem,
} = dataSlice.actions;
export default dataSlice.reducer;
