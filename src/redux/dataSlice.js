import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const itemTemplate = {
  id: '',
  text: '',
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
  data: [],
};

// Set the completed and id values for each item in the data set
const updateImportedDataItemsRecursively = (items) =>
  items.map((item) => {
    const newItem = { ...item, id: uuid() };
    if (newItem.children && newItem.children.length > 0) {
      newItem.children = updateImportedDataItemsRecursively(newItem.children);
    }
    return newItem;
  });

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    importFromJsonStart(state) {
      state.loading = true;
      state.error = null;
    },
    importFromJsonSuccess(state, action) {
      state.data = updateImportedDataItemsRecursively(action.payload);
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
      const indexOfSelectedIndex = state.data.findIndex(
        (each) => each.id === state.selectedIndex.id
      );

      const newItem = {
        ...itemTemplate,
        ...action.payload,
        type: 'sub-index',
        id: uuid(),
      };

      const updatedData = state.data.map((item, index) => {
        if (index === indexOfSelectedIndex) {
          return {
            ...item,
            children: [...item.children, newItem],
          };
        }
        return item;
      });

      return {
        ...state,
        data: updatedData,
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
} = dataSlice.actions;
export default dataSlice.reducer;
