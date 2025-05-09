import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../lib/store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;