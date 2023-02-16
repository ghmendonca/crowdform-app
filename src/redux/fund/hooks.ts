import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./../hooks";
import { getFunds } from "./fundSlice";
import { funds as fundsSelector } from "./selectors";

export const useFunds = () => {
  const funds = useAppSelector(fundsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFunds());
  }, []);

  return funds;
};
