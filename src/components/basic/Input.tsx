import React, { ChangeEvent, useEffect, useState } from "react";

type propsType = {
  type?: string;
  onChange?: (e: any) => void;
  initialValue?: string;
  ref?: any;
  id: string;
  label?: string;
  placeholder?: string;
};
const Input: React.FC<propsType> = ({
  type = "text",
  onChange,
  initialValue = "",
  ref,
  id,
  label = "",
  placeholder = "",
}) => {
  const [value, setValue] = useState<string | undefined>(initialValue);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        onChange={onChangeHandler}
        value={value}
        ref={ref}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
