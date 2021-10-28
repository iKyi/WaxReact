import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IParticipantStoreEntry } from "../../interfaces/ParticipantStoreEntry";

export enum LOADING_STATES {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  FALSE = 'FALSE'
}

export interface IParticipantsSliceState {
  participants: IParticipantStoreEntry[];
  loading: LOADING_STATES
}

const initialState: IParticipantsSliceState = {
  participants: [],
  loading: LOADING_STATES.FALSE
}

export const participantsSlice = createSlice({
  name: 'participants',
  initialState: initialState,
  reducers: {
    setParticipants: (state, action: PayloadAction<IParticipantStoreEntry[]>) => {
      const { payload } = action;
      state.participants = payload;
    },
    setParticipantsLoadingState: (state, action: PayloadAction<LOADING_STATES>) => {
      const { payload } = action;
      state.loading = payload;
    },
  }
})

export const { setParticipants, setParticipantsLoadingState } = participantsSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default participantsSlice.reducer;