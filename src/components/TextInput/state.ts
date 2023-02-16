import { TextInputProps } from "./types";
import { useToggle } from "../../utils/useToggle";

export const useComponentState = ({ password }: Partial<TextInputProps>) => {
  const [hidden, toggleHidden] = useToggle(password);

  return {
    hidden,
    toggleHidden,
  };
};
