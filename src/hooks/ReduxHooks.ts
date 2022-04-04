import { AppDispatch, AppState } from "../stores/Store";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
