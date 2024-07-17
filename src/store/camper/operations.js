import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestCampers } from '../services/camper-api.js';

export const getCampers = createAsyncThunk(
  'camper/list',
  async (data, thunkAPI) => {
    try {
      const res = await requestCampers(data);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);
