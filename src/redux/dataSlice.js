import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { moveItemInDataArray } from './reducers/moveItem';
import { editItemInDataArray } from './reducers/editItem';
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
  cas: [
    {
      id: 1,
      text: '-',
      type: '',
    },
    {
      id: 2,
      text: 'R ENG FIRE',
      type: 'warning',
    },
    { id: 3, text: 'COFFEE COLD', type: 'caution' },
    {
      id: 4,
      text: 'CKPT DOOR OPEN',
      type: 'advisory',
    },
    { id: 5, text: 'APU ON', type: 'info' },
  ],
  synoptics: [
    {
      id: 1,
      name: '-',
    },
    {
      id: 2,
      name: 'Status',
    },
    {
      id: 3,
      name: 'Air',
    },
    {
      id: 4,
      name: 'Door',
    },
    {
      id: 5,
      name: 'Elec',
    },
    {
      id: 6,
      name: 'Flt Ctrl',
    },
    {
      id: 7,
      name: 'Fuel',
    },
    {
      id: 8,
      name: 'Hyd',
    },
    {
      id: 9,
      name: 'Avionic',
    },
    {
      id: 10,
      name: 'Info',
    },
    {
      id: 11,
      name: 'CB',
    },
  ],
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
    editItem: (state, action) => {
      const { data, selectedChecklistItem: id } = state;
      const { payload } = action;
      const newArray = editItemInDataArray(data, id, payload);
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
  editItem,
} = dataSlice.actions;
export default dataSlice.reducer;
