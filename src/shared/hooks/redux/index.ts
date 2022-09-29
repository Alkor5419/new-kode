import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
} from "react-redux";
import type {
  RootState,
  AppDispatch,
} from "../../../app/store";

// Использовать вместо useDispatch,useSelector
export const useAppDispatch = () =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
