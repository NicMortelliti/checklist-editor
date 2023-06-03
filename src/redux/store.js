import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
  },
});
