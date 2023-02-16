import { RootState } from "../store";

export const funds = (state: RootState) => state.fund.funds;
export const selectedFund = (state: RootState) => state.fund.selectedFund;
