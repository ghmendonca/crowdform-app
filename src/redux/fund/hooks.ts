import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./../hooks";
import { getFundById, getFunds } from "./fundSlice";
import {
  funds as fundsSelector,
  selectedFund as selectedFundSelector,
} from "./selectors";

export const useFunds = () => {
  const funds = useAppSelector(fundsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFunds());
  }, [dispatch]);

  return funds;
};

export const useFund = (id: number) => {
  const selectedFund = useAppSelector(selectedFundSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFundById(id));
  }, [dispatch, id]);

  return selectedFund;
};
