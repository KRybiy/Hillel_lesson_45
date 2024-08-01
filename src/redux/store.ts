import { configureStore, Action, Middleware } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { useDispatch } from "react-redux";
import userReducer from "./userSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

const logger: Middleware = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count;
  const result = next(action);
  const nextState = storeApi.getState().counter.count;
  console.log("Previous count", prevState);
  console.log("Dispatched action", action as Action);
  console.log("Next count", nextState);
  return result;
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;
