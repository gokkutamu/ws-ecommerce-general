// Import dependencies
import { configureStore } from "@reduxjs/toolkit";

// Import types. (interface)
import noodleReducer from "./slice";

export const store = configureStore({
    reducer: { 
        noodles: noodleReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;