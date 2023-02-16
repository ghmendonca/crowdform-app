import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FundState } from "./types";
import funds from "../../../mock/funds.json";
import { Fund } from "../../types/fund";

const initialState: FundState = {
  funds: [],
  selectedFund: undefined,
};

const fundSlice = createSlice({
  name: "fund",
  initialState,
  reducers: {
    getFunds: (state) => {
      state.funds = funds as Fund[];
    },
    getFundById: (state, action: PayloadAction<number>) => {
      state.selectedFund = state.funds.find(
        (fund) => fund.id === action.payload
      );
    },
  },
});

export const { getFunds, getFundById } = fundSlice.actions;

export default fundSlice.reducer;
