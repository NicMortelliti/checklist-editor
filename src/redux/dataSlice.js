import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { moveItemInDataArray } from './reducers/moveItem';
import { deleteItemFromData } from './reducers/deleteItem';
import { addUuid } from './reducers/addUuid';
import { addSubIndex } from './reducers/addSubIndex';

const itemTemplate = {
  id: '',
  text: '',
  response_text: '',
  extension_text: '',
  type: '',
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
  selectedChecklistItem: '',
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
      state.data = addUuid(action.payload);
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
      data: [
        ...state.data,
        { ...itemTemplate, ...action.payload, type: 'index', id: uuid() },
      ],
    }),
    addNewSubIndexItem: (state, action) => {
      const { data, selectedIndex: id } = state;
      const { payload } = action;
      const newArray = addSubIndex(data, id, payload, itemTemplate);
      return {
        ...state,
        data: newArray,
      };
    },
    setSelectedChecklistItem: (state, action) => ({
      ...state,
      selectedChecklistItem: action.payload,
    }),
    deleteItem: (state) => {
      const { data, selectedChecklistItem: id } = state;
      const newArray = deleteItemFromData(data, id);
      return {
        ...state,
        data: newArray,
      };
    },
    moveItem: (state, action) => {
      const { data, selectedChecklistItem: id } = state;
      const { payload } = action;
      const newArray = moveItemInDataArray(data, id, payload);
      return {
        ...state,
        data: newArray,
      };
    },
  },
});

export const {
  importFromJsonStart,
  importFromJsonSuccess,
  importFromJsonFailure,
  setSelectedIndex,
  setSelectedSubIndex,
  addNewIndexItem,
  addNewSubIndexItem,
  setSelectedChecklistItem,
  deleteItem,
  moveItem,
} = dataSlice.actions;
export default dataSlice.reducer;
