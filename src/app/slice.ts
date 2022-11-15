// Import dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Import types. (interface)
import INoodle from "../types/INoodle";
import type { RootState } from "./store";

// Import interfaces.
import { initialState } from "./interface";

export const noodleSlice = createSlice({
    name: "noodle",
    initialState: initialState,
    reducers: {
        createNoodle: (state, action: PayloadAction<INoodle>) => {
            state.total += action.payload.price * action.payload.amount;
            const existingItemIndex = state.noodle.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingItem = state.noodle[existingItemIndex];
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.payload.amount,
                };
                state.noodle = state.noodle.map((noodle) => {
                    if (noodle.id === action.payload.id) return updatedItem;
                    else return noodle;
                });
            } else {
                state.noodle = state.noodle.concat(action.payload);
            }
        },
        /* Remove noodle */
        removeNoodle: (state, action: PayloadAction<string>) => {
            const existingItemIndex = state.noodle.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.noodle[existingItemIndex];
            state.total -= existingItem.price;
            // if only 1, remove.
            if (existingItem.amount === 1) {
                state.noodle = state.noodle.filter((item) => item.id !== action.payload);
            } else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                };
                state.noodle = state.noodle.map((noodle) => {
                    if (noodle.id === action.payload) return updatedItem;
                    else return noodle;
                });
            }
        },
        /* Empty cart */
        emptyCart: (state) => {
            state.noodle = [];
            state.total = 0;
        },
    },
});

export const { createNoodle, removeNoodle, emptyCart } = noodleSlice.actions;
export const selectNoodle = (state: RootState) => state.noodles.noodle.values;
export default noodleSlice.reducer;