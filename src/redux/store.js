import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../redux/blogs/BlogSlice.js';

export const store = configureStore({
  reducer: { blog: blogReducer },
});
