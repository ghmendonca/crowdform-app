import { useState } from "react";

export const useComponentState = () => {
  const [selected, setSelected] = useState(0);

  return {
    selected,
    setSelected,
  };
};
