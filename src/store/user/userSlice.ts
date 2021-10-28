import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArenaUser, IUALUser } from "./interfaces";

export interface IUserState {
  UALUser: IUALUser | null,
  ArenaUser: IArenaUser | null
}

const initialState: IUserState = {
  UALUser: null,
  ArenaUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUALUser: (state, action: PayloadAction<IUALUser>) => {
      const { payload } = action;
      state.UALUser = payload;
    },
    setArenaUser: (state, action: PayloadAction<IArenaUser>) => {
      const { payload } = action;
      state.ArenaUser = payload;
    },
  }
})

export const { setUALUser, setArenaUser } = userSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;