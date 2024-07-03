import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export default store;
