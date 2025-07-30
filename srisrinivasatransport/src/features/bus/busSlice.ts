import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BusRecord } from './types';
import { fetchBuses } from './busAPI';

interface BusState {
  buses: BusRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: BusState = {
  buses: [],
  loading: false,
  error: null,
};

export const getBuses = createAsyncThunk('bus/getBuses', async () => {
  return await fetchBuses();
});

const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBuses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBuses.fulfilled, (state, action) => {
        state.loading = false;
        state.buses = action.payload;
      })
      .addCase(getBuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching buses';
      });
  },
});

export default busSlice.reducer;
