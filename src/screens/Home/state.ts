import { useFunds } from "../../redux/fund/hooks";

export const useComponentState = () => {
  const funds = useFunds();

  return {
    funds,
  };
};
