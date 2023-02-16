import { FundCardProps } from "./types";

export const useComponentState = ({ fund }: FundCardProps) => {
  const increased = fund.difference > 0;
  const color = increased ? "#0FDF8F" : "#EE8688";

  return {
    increased,
    color,
  };
};
