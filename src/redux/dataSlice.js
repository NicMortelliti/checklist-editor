import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { searchById } from '../helpers/searchFunctions';

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

// Set the completed and id values for each item in the data set
const updateImportedDataItemsRecursively = (items) =>
  items.map((item) => {
    const newItem = { ...item, id: uuid() };
    if (newItem.children && newItem.children.length > 0) {
      newItem.children = updateImportedDataItemsRecursively(newItem.children);
    }
    return newItem;
  });

// Add SubIndex Item
const addSubIndexItem = (data, id, payload) => {
  const indexOfSelectedIndex = data.findIndex((each) => each.id === id);

  const newItem = {
    ...itemTemplate,
    ...payload,
    type: 'sub-index',
    id: uuid(),
  };

  const updatedData = data.map((item, index) => {
    if (index === indexOfSelectedIndex) {
      return {
        ...item,
        children: [...item.children, newItem],
      };
    }
    return item;
  });

  return updatedData;
};

// Delete an item from the data array
const deleteItemFromData = (items, id) => {
  const newItemsArray = items.map((item) => ({ ...item }));
  let currentArray = newItemsArray;
  const indexOfItem = searchById(items, id);
  const lastArrayIndex = indexOfItem[indexOfItem.length - 1];

  indexOfItem.slice(0, -1).forEach((eachArrayIndex) => {
    currentArray = currentArray[eachArrayIndex].children = currentArray[
      eachArrayIndex
    ].children.map((child) => ({ ...child }));
  });

  currentArray.splice(lastArrayIndex, 1);

  return newItemsArray;
};

// Move row up or down
const moveItemInDataArray = (items, id, direction) => {
  const newItemsArray = items.map((item) => {
    if (item.id === id) {
      const { children } = item;
      let currentIndex = children.findIndex((child) => child.id === id);

      if (direction === 'up' && currentIndex > 0) {
        const itemToMove = children[currentIndex];
        children.splice(currentIndex, 1);
        children.splice(currentIndex - 1, 0, itemToMove);
      } else if (direction === 'down' && currentIndex < children.length - 1) {
        const itemToMove = children[currentIndex];
        children.splice(currentIndex, 1);
        children.splice(currentIndex + 1, 0, itemToMove);
      }
    }

    return {
      ...item,
      children: moveItemInDataArray(item.children, id, direction),
    };
  });

  return newItemsArray;
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
      const { data, selectedIndex: id } = state;
      const { payload } = action;
      const newArray = addSubIndexItem(data, id, payload);
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
