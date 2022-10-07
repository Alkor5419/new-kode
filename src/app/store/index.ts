import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({ usersReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
