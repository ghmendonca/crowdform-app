import { createSlice } from "@reduxjs/toolkit";
import { FundState } from "./types";
import funds from "../../../mock/funds.json";
import { Fund } from "../../types/fund";

const initialState: FundState = {
  funds: [],
};

const fundSlice = createSlice({
  name: "fund",
  initialState,
  reducers: {
    getFunds: (state) => {
      state.funds = funds as Fund[];
    },
  },
});

export const { getFunds } = fundSlice.actions;

export default fundSlice.reducer;
