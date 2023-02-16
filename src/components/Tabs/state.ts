import { useMemo, useState } from "react";
import { TabsProps } from "./types";

export const useComponentState = ({ tabs }: TabsProps) => {
  const [index, setIndex] = useState(0);

  const component = useMemo(() => {
    if (index < tabs.length) {
      return tabs[index].component;
    }

    return 0;
  }, [index]);

  return {
    component,
    index,
    setIndex,
  };
};
