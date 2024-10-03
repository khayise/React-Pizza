import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExtra, IItem } from '../Pages/Home';

interface IInitialState {
  selectedItem: IItem | null;
  selectedExtras: IExtra[];
  total: number;
}

const initialState: IInitialState = {
  selectedItem: null,
  selectedExtras: [],
  total: 0,
};

const SelectedItemSlice = createSlice({
  name: 'SelectedItemSlice',
  initialState,
  reducers: {
    setSelectedItem(state, action: PayloadAction<IItem>) {
      state.selectedItem = action.payload;
    },
    clearExtras(state) {
      state.selectedItem = null;
      state.selectedExtras = [];
    },
    addExtra(state, action: PayloadAction<IExtra>) {
      state.selectedExtras.push(action.payload);
    },
    removeExtra(state, action: PayloadAction<IExtra>) {
      state.selectedExtras = state.selectedExtras.filter((extra) => extra.id !== action.payload.id);
    },
  },
});

export default SelectedItemSlice.reducer;

export const { setSelectedItem, clearExtras, addExtra, removeExtra } = SelectedItemSlice.actions;
