import { useEffect, useState } from "react";

const Search = ({
  initValue,
  onKeyDown,
  debounce = 500,
  ...props
}: {
  initValue: string;
  onKeyDown: any;
  debounce?: number;
  [key: string]: any;
}) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onKeyDown(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Search;
