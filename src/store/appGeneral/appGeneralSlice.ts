import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppGeneralState {
  loading: boolean
}

const initialState: IAppGeneralState = {
  loading: false
}

export const appGeneralSlice = createSlice({
  name: 'appGeneral',
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.loading = payload;
    },
  }
})

export const { setLoading } = appGeneralSlice.actions;

export default appGeneralSlice.reducer;