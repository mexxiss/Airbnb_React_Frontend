import { useState, useCallback } from "react";

export const useToggle = (
  initialValue: boolean = false
): [boolean, (nextValue?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((nextValue?: boolean) => {
    setValue((current) =>
      typeof nextValue === "boolean" ? nextValue : !current
    );
  }, []);

  return [value, toggle];
};
