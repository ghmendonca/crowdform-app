import { useState } from "react";

export const useToggle = (
  defaultValue: boolean | undefined
): [boolean | undefined, () => void] => {
  const [value, setValue] = useState(defaultValue);

  return [value, () => setValue((current) => !current)];
};
