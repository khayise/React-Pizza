import { createSlice, PayloadAction, createAsyncThunk, Action } from '@reduxjs/toolkit';
import { IExtra } from '../Pages/Home';
import axios from 'axios';
import { isEqual } from 'lodash';
interface IExtraState {
  extras: IExtra[];
  isLoading: boolean;
}

const initialState: IExtraState = {
  extras: [],
  isLoading: true,
};

export const fetchExtras = createAsyncThunk('ExtrasSlice/fetchExtras', async () => {
  const extrasUrl: string = 'https://react-pizza-server.vercel.app/extras';
  const response = await axios.get(extrasUrl);
  const res: IExtra[] = await response.data;

  return res;
});

const ExtrasSlice = createSlice({
  name: 'ExtrasSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExtras.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExtras.fulfilled, (state, action: PayloadAction<IExtra[]>) => {
      state.isLoading = false;
      state.extras = action.payload;
    });
  },
});

export default ExtrasSlice.reducer;

export const {} = ExtrasSlice.actions;
