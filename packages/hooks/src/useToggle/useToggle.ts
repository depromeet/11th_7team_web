import { useCallback, useState } from "react";

export function useToggle(defaultValue: boolean): [boolean, VoidFunction] {
  const [value, setValue] = useState<boolean>(defaultValue);
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}
