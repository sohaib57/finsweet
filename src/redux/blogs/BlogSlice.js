import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/';

const initialState = {
  blogs: [],
  views: 0,
  isLoading: false,
};

export const getBlogs = createAsyncThunk('blog/getBlogs', async () => {
  return await axios
    .get(url)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addViewCount: (state, { payload }) => {
      state.views = payload++;
    },
  },

  extraReducers: {
    [getBlogs.pending]: state => {
      state.isLoading = true;
    },
    [getBlogs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    },
    [getBlogs.pending]: state => {
      state.isLoading = false;
    },
  },
});

export const { addViewCount } = blogSlice.actions;
export default blogSlice.reducer;
