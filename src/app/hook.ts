// Import dependencies
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Import stores
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useApSelector: TypedUseSelectorHook<RootState> = useSelector;