import { createSlice, PayloadAction, createAsyncThunk, Action } from '@reduxjs/toolkit';

interface initialState {
  activeNav: number | null;
}

const initialState: initialState = {
  activeNav: null,
};

const ActiveNavSlice = createSlice({
  name: 'ActiveNavSlice',
  initialState,
  reducers: {
    setActiveNav(state, action: PayloadAction<number | null>) {
      state.activeNav = action.payload;
    },
  },
});

export default ActiveNavSlice.reducer;

export const { setActiveNav } = ActiveNavSlice.actions;
