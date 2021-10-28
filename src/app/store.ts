import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice';
import participantsReducer from '../store/participants/participantsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    participants: participantsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
