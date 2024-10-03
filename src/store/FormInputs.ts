import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  Street: string;
  House: string;
  'Post Index': string;
  'Telephone Number': string;
}

const initialState: InitialState = {
  Street: '',
  House: '',
  'Post Index': '',
  'Telephone Number': '+1',
};

const FormInputsSlice = createSlice({
  name: 'FormInputsSlice',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<[keyof InitialState, string]>) {
      const [key, text] = action.payload;
      state[key] = text;
    },
  },
});

export const { changeInput } = FormInputsSlice.actions;

export default FormInputsSlice.reducer;
