import { Fund } from "../../types/fund";

export interface FundState {
  funds: Fund[];
  selectedFund?: Fund;
}
